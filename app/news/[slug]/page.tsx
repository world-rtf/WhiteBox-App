import { getAllNews } from "@/app/lib/script";
import Header from "@/app/ui/Header";

// говнище, без которого не работает build
interface NewsPageProps {
    params: Promise<{ slug: string }>;
}

export default async function Page({ params }: NewsPageProps) {
    // 
    const { slug } = await params;

    const newsData = await getAllNews();
    const news = newsData.find((item) => item.id.toString() === slug);
    // решить проблему! - 30.12 -решено
    if (!news) return <div>ERROR</div>;

    return (
        <div className="min-h-screen">
            <div className="container mx-auto p-4">
                <Header />
                <main className="p-8 bg-white shadow-md rounded-lg">
                    <h1 className="text-3xl font-bold mb-2">{news.title}</h1>
                    <p className="text-gray-500 mb-4">{new Date(news.date).toLocaleDateString()}</p>
                    {news.image && <img src={news.image} alt={news.title} className="w-full h-auto rounded-lg mb-4" />}
                    <p className="text-gray-700 leading-relaxed">{news.text}</p>
                </main>
            </div>
        </div>
    );
}