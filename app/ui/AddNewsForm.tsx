import React, { useState } from "react";
import { AddNewsFormProps } from "@/app/lib/types";

// решение проблемы с пропсам https://dev.to/elhamnajeebullah/react-typescript-what-is-reactfc-and-why-should-i-use-it-4029
const AddNewsForm: React.FC<AddNewsFormProps> = ({ onAddNews }) => {
    // состояния
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [date, setDate] = useState("");
    const [image, setImage] = useState("");

    // отправка формы
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // no перезагрузка
        const response = await fetch("/api", {
            method: "POST",
            // тип контента у нас json
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, text, date, image }), // отправка в формате json
        });
        const newNews = await response.json(); // перехват новости с сервера
        // передача родителю, а после чистка
        onAddNews(newNews);
        setTitle("");
        setText("");
        setDate("");
        setImage("");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-2">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="border p-2 rounded w-full"
            />
            <textarea
                placeholder="News text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
                className="border p-2 rounded w-full"
                rows={4}
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="border p-2 rounded w-full"
            />
            <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="border p-2 rounded w-full"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                ADD
            </button>
        </form>
    );
};

export default AddNewsForm;
