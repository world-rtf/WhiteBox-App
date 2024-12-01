"use client"; // чисто клиентская часть
import React, { useEffect, useState } from "react";
import AddNewsForm from "./AddNewsForm";
import SearchBar from "./SearchBar";
import NewsList from "./NewsList";
import { News } from "@/app/lib/types";

const NewsManager = () => {
    // бтекущее и возможное состояния (новости и поиск)
    // обязательно устанавливаем начальные состояния, а то всё плохо
    const [newsData, setNewsData] = useState<News[]>([]);
    const [searchText, setSearchText] = useState<string>("");

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch("/api"); // обрабатываем запросики
                const data: News[] = await response.json();
                setNewsData(data);
            } catch (error) {
                console.error("Failed", error);
            }
        };
        fetchNews();
    }, []);

    // добавление новостей
    const handleAddNews = (newNews: News) => {
        setNewsData((prevNews) => [...prevNews, newNews]);
    };
    // поиск
    const handleSearch = (text: string) => {
        setSearchText(text);
    };
    // обработка поиска новостей
    const filteredNews = newsData.filter((news) =>
        news.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="container mx-auto p-4">
            <div className="shadow-md rounded-lg p-6">
                <AddNewsForm onAddNews={handleAddNews} />
            </div>
            <SearchBar onSearch={handleSearch} />
            <NewsList newsData={filteredNews} />
        </div>
    );
};

export default NewsManager;