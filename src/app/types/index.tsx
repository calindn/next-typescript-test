export type Blog = {
  user_id: number;
  title: string;
  content_text: string;
  photo_url: string;
  created_at: string;
  id: number;
  description: string;
  content_html: string;
  category: string;
  updated_at: string;
};

export type Dictionary = {
  navigationBar: {
    home: string,
    blog: string
  },
  blogCard: {
    title: string,
    seeDetailsButtonText: string
  },
  articleDetailsPage: {
    goBackAction: string
  }
};
