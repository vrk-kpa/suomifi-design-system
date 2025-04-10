import {
  Block,
  Button,
  Dropdown,
  DropdownItem,
  Heading,
  IconSearch,
  Pagination,
  Table,
  TableColumn,
  TableRow,
  Text,
  TextInput,
} from 'suomifi-ui-components';
import { useState } from 'react';
import {
  columns,
  filterByWorkHoursOptions,
  fullData,
  showOnPageOptions,
} from './TableData';
import { useTranslation } from 'next-export-i18n';
import styles from './TableWithFilters.module.scss';
import React from 'react';

export const TableWithFilters: React.FC = () => {
  const { t } = useTranslation();

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filteredData, setFilteredData] =
    useState<TableRow<readonly TableColumn[]>[]>(fullData);
  const [displayData, setDisplayData] = useState(filteredData.slice(0, 10));
  const [currentPage, setCurrentPage] = useState(1);
  const [controlledSelectedRowIds, setControlledSelectedRowIds] = useState<
    string[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const searchInputRef = React.useRef<HTMLInputElement | null>(null);
  const filterByWorkHoursRef = React.useRef<HTMLButtonElement | null>(null);
  const searchTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const getDropdownValue = (ref: React.RefObject<HTMLButtonElement>) => {
    if (ref.current) {
      const inputElement = ref.current.querySelector('input');
      return inputElement ? inputElement.value : '';
    }
    return '';
  };

  const sortData = (
    column: string,
    direction: string,
    data: TableRow<readonly TableColumn[]>[],
  ): TableRow<readonly TableColumn[]>[] =>
    data.flat().sort((a, b) => {
      const aValue = String(a[column as keyof typeof a]);
      const bValue = String(b[column as keyof typeof b]);

      const getTextContent = (element: React.ReactNode): string => {
        if (typeof element === 'string' || typeof element === 'number') {
          return element.toString();
        }
        if (React.isValidElement(element)) {
          const { children } = element.props;
          if (Array.isArray(children)) {
            return children.map(getTextContent).join('');
          }
          return getTextContent(children);
        }
        return '';
      };

      const aValueText = getTextContent(aValue);
      const bValueText = getTextContent(bValue);

      const isNumeric =
        !isNaN(Number(aValueText)) && !isNaN(Number(bValueText));

      if (isNumeric) {
        return direction === 'asc'
          ? Number(aValueText) - Number(bValueText)
          : Number(bValueText) - Number(aValueText);
      }

      return direction === 'asc'
        ? aValueText.localeCompare(bValueText)
        : bValueText.localeCompare(aValueText);
    });

  const filterAndSortData = (column: string, direction: 'asc' | 'desc') => {
    setLoading(true);
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    searchTimeoutRef.current = setTimeout(() => {
      let filteredData = fullData;
      // First filter by search input
      if (searchInputRef.current) {
        filteredData = filteredData.filter(
          (d) =>
            String(d.firstName)
              .toLowerCase()
              .includes((searchInputRef.current?.value || '').toLowerCase()) ||
            String(d.lastName)
              .toLowerCase()
              .includes((searchInputRef.current?.value || '').toLowerCase()),
        );
      }
      // Then filter by work hours
      const workHoursValue = getDropdownValue(filterByWorkHoursRef);
      if (workHoursValue !== 'all' && workHoursValue !== '') {
        filteredData = filteredData.filter(
          (d) => Number(String(d.hours_worked)) < Number(workHoursValue),
        );
      }
      filteredData = sortData(column, direction, filteredData);
      setFilteredData(filteredData);
      setDisplayData(filteredData.slice(0, itemsPerPage));
      setCurrentPage(1);
      setLoading(false);
    }, 1500);
  };

  React.useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayData(filteredData.slice(startIndex, endIndex));
    setControlledSelectedRowIds([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortColumn, sortDirection]);

  return (
    <Block className={styles['table-with-filters']}>
      <Heading variant="h3" mb="l" id="table-heading">
        {t('table_with_filters.reference_implementation.table_heading')}
      </Heading>
      <fieldset className={styles['table-with-filters_inputs']}>
        <legend className="sr-only">
          {t('table_with_filters.reference_implementation.table_filters')}
        </legend>
        <TextInput
          labelText={t('table_with_filters.reference_implementation.search')}
          className={styles['table-with-filters_input']}
          debounce={300}
          ref={searchInputRef}
          onChange={() => {
            filterAndSortData(sortColumn, sortDirection);
          }}
          icon={<IconSearch />}
        />
        <Dropdown
          labelText={t(
            'table_with_filters.reference_implementation.filter_by_work_hours',
          )}
          className={`${styles['table-with-filters_input']} table-pattern-dropdown`}
          defaultValue="all"
          forwardedRef={filterByWorkHoursRef}
          onChange={() => filterAndSortData(sortColumn, sortDirection)}
        >
          {filterByWorkHoursOptions.map((option) => (
            <DropdownItem key={option.key} value={option.key}>
              {option.name}
            </DropdownItem>
          ))}
        </Dropdown>
        <Dropdown
          labelText={t(
            'table_with_filters.reference_implementation.show_on_page',
          )}
          className={`${styles['table-with-filters_input']} table-pattern-dropdown`}
          defaultValue="10"
          onChange={(value) => {
            setLoading(true);
            setTimeout(() => {
              setItemsPerPage(parseInt(value));
              setDisplayData(filteredData.slice(0, parseInt(value)));
              setCurrentPage(1);
              setLoading(false);
            }, 1500);
          }}
        >
          {showOnPageOptions.map((option) => (
            <DropdownItem key={option.key} value={option.key}>
              {option.name}
            </DropdownItem>
          ))}
        </Dropdown>
      </fieldset>
      <Block className={styles['table-with-filters_toolbar']} mb="s">
        <Block aria-live="polite" aria-atomic="true">
          {loading ? (
            <Text variant="bold">
              {t('table_with_filters.reference_implementation.loading')}
            </Text>
          ) : (
            <Text variant="bold">
              {filteredData.length}{' '}
              {t('table_with_filters.reference_implementation.people')},{' '}
              {controlledSelectedRowIds.length}{' '}
              {t('table_with_filters.reference_implementation.chosen')}
            </Text>
          )}
        </Block>
        <Block>
          <Block>
            <Button
              onClick={() => {
                const startIndex = (currentPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                setControlledSelectedRowIds(
                  filteredData.slice(startIndex, endIndex).map((d) => d.id),
                );
              }}
            >
              {t('table_with_filters.reference_implementation.choose_all')}
            </Button>
            <Button ml="xs" onClick={() => setControlledSelectedRowIds([])}>
              {t(
                'table_with_filters.reference_implementation.remove_selections',
              )}
            </Button>
          </Block>
          <Block></Block>
        </Block>
      </Block>
      <Table
        aria-labelledby="table-heading"
        columns={columns}
        data={displayData}
        enableRowSelection
        controlledSelectedRowIds={controlledSelectedRowIds}
        onSelectedRowsChange={(rowIds) => setControlledSelectedRowIds(rowIds)}
        tableSortCallback={(column, direction) => {
          setSortColumn(column);
          setSortDirection(direction);
          filterAndSortData(column, direction);
        }}
        tableSortedAriaLiveText={(sortedColumn, direction) =>
          direction === 'asc'
            ? t(
                'table_with_filters.reference_implementation.table_is_sorted_asc',
                {
                  column: sortedColumn,
                },
              )
            : t(
                'table_with_filters.reference_implementation.table_is_sorted_desc',
                {
                  column: sortedColumn,
                },
              )
        }
        loading={loading}
        loadingRowAmount={itemsPerPage}
      />
      <Block mt="l">
        {displayData.length > 0 ? (
          <Pagination
            pageInput={false}
            currentPage={currentPage}
            lastPage={Math.ceil(filteredData.length / itemsPerPage)}
            nextButtonAriaLabel={t(
              'table_with_filters.reference_implementation.next_table_page',
            )}
            previousButtonAriaLabel={t(
              'table_with_filters.reference_implementation.previous_table_page',
            )}
            aria-label={t(
              'table_with_filters.reference_implementation.table_pagination',
            )}
            onChange={(page) => {
              const startIndex = (page - 1) * itemsPerPage;
              const endIndex = startIndex + itemsPerPage;
              setDisplayData(filteredData.slice(startIndex, endIndex));
              setCurrentPage(page);
              setControlledSelectedRowIds([]);
            }}
            pageIndicatorText={(currentPage, lastPage) =>
              `${t(
                'table_with_filters.reference_implementation.page',
              )} ${currentPage} / ${lastPage}`
            }
            ariaPageIndicatorText={(currentPage, lastPage) =>
              `${t(
                'table_with_filters.reference_implementation.showing_page',
              )} ${currentPage} ${t(
                'table_with_filters.reference_implementation.out_of',
              )} ${lastPage}`
            }
            style={{ textAlign: 'center' }}
          />
        ) : (
          <Block style={{ textAlign: 'center' }}>
            {t('table_with_filters.reference_implementation.no_results')}
          </Block>
        )}
      </Block>
    </Block>
  );
};
