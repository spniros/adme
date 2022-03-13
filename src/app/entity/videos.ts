export interface category {
  categories: Category[];
}

export interface Category {
  name: string;
  videos: Video[];
}

export interface Video {
  id: string;
  description: string;
  sources: string[];
  subtitle: string;
  title: string;
}




export interface SelectVideo {
  readonly videos: Video;
}