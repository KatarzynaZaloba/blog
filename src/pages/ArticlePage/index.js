import React from 'react';
import {useParams} from "react-router-dom";
import NavBar from "../../components/organisms/NavBar";
import Container from "../../components/atoms/Container";
import {articlesLink} from "../../components/molecules/Article/ArticleData";
import Footer from "../../components/molecules/Footer";
import Logo from "../../images/kate.jpg";
import homePageHeader from "../../images/homePageHeader.png";

const ArticlePage = () => {
    const {id} = useParams(); // Uzyskaj identyfikator z parametrów URL
    const article = articlesLink.find(article => article.id.toString() === id);
    const tags = article.tag.split(", ").map(tag => tag.trim());

    if (!article) {
        return (
            <div>
                <p>Artykuł nie został znaleziony.</p>
            </div>
        );
    }

    return (
        <>
            <Container>
                <NavBar/>
                <h3 className="text-work-sans md:text-4xl text-2xl font-semibold md:leading-10 leading-7 self-stretch pb-4">
                    {article.title}
                </h3>
                <div className="mb-3">
                {tags && (
                    tags.map((tag, index) => (
                        <span key={index}
                              className="homePageTitle bg-gradient-to-r from-emerald-700 to-green-700 text-white text-sm py-0 px-1 my-3 rounded-md justify-center mr-1">
                            {tag}
                        </span>
                    ))
                )}
                </div>
                    <div className="flex justify-start items-center pb-4">
                        <img src={Logo} className="rounded-full w-[36px] mr-2" alt="logo"/>
                        <p className="text-xs text-zinc-700 font-medium mr-2 text-work-sans p-0">Katarzyna Żałoba</p>
                        <p className="text-xs text-zinc-700 text-work-sans p-0">{article.date}</p>
                    </div>
                <div className="pb-6">
                <img src={article.img} className="rounded-md" alt="logo"/>
                </div>
                <div className="pb-10">
                {article.body}
                </div>
            </Container>
            <Footer/>
        </>
    );
};

export default ArticlePage;