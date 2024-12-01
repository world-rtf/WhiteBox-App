import React from "react";
import Link from "next/link";
import { News } from "@/app/lib/types";

const NewsItem: React.FC<{ news: News }> = ({ news }) => (
    <Link href={`/news/${news.id}`}>
        <div className="flex rounded-lg border shadow-md p-4">
            <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
                <p className="text-gray-500 mb-2">{new Date(news.date).toLocaleDateString()}</p>
                <p className="text-gray-700">{news.text.slice(0, 200)}...</p>
            </div>
            {news.image && <img src={news.image} alt={news.title} className="ml-4 rounded-lg w-64 h-32 object-cover" />}
        </div>
    </Link>
);

export default NewsItem;
