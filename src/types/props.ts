export type ChildrenProp = {
  children: JSX.Element;
};

export type Videos = {
  category: string;
  id: number;
  resume: string;
  title: string;
  url: string;
  videoSelected: {
    category: string;
    id: number;
    resume: string;
    title: string;
    url: string;
  };
};

export type VideosProp = {
  videoSelected: Videos | null;
};
