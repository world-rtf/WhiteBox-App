export interface News {
    id: string | number;
    title: string;
    date: string;
    text: string;
    image?: string;
}

export interface AddNewsFormProps {
    onAddNews: (news: News) => void;
}

export interface NewsListProps {
    newsData: News[];
}

export interface NewsItemProps {
    news: News;
}

export interface SearchBarProps {
    onSearch: (searchText: string) => void;
}