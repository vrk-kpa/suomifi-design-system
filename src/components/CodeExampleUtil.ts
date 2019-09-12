export interface CodeExampleData {
  examples: Examples;
}

interface Examples {
  edges: Edge[];
}

interface Edge {
  node: Node;
}

interface Node {
  name: string;
  content: string;
}

export const getExample = (data: CodeExampleData, name: string): string => {
  const { node } = data.examples.edges.find(({ node }) => node.name === name);
  return node.content;
};
