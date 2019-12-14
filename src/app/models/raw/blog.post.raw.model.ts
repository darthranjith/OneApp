export interface Guid {
  rendered: string;
}

export interface Title {
  rendered: string;
}

export interface Content {
  rendered: string;
  protected: boolean;
}

export interface Excerpt {
  rendered: string;
  protected: boolean;
}

export interface Self {
  href: string;
}

export interface Collection {
  href: string;
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href: string;
}

export interface Reply {
  embeddable: boolean;
  href: string;
}

export interface VersionHistory {
  count: number;
  href: string;
}

export interface PredecessorVersion {
  id: number;
  href: string;
}

export interface WpFeaturedmedia {
  embeddable: boolean;
  href: string;
}

export interface WpAttachment {
  href: string;
}

export interface WpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

export interface Links {
  self: Self[];
  collection: Collection[];
  about: About[];
  author: Author[];
  replies: Reply[];
  version_history: VersionHistory[];
  predecessor_version: PredecessorVersion[];
  wp_featuredmedia: WpFeaturedmedia[];
  wp_attachment: WpAttachment[];
  wp_term: WpTerm[];
  curies: Cury[];
}

export interface BlogPostRawModel {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: Guid;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Title;
  content: Content;
  excerpt: Excerpt;
  author: number;
  featured_media: any;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  categories: number[];
  tags: number[];
  _links: Links;
}
