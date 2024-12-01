import React from "react";
import NewsItem from "./NewsItem";
import { News } from "@/app/lib/types";

interface NewsListProps {
    newsData: News[];
}

const NewsList: React.FC<NewsListProps> = ({ newsData }) => (
    <div className="max-h-[450px] overflow-y-auto p-4 border rounded-lg shadow-md">
        <div className="flex flex-col gap-4">
            {newsData.map((news) => (
                <NewsItem key={news.id} news={news} />
            ))}
        </div>
    </div>
);

export default NewsList;
