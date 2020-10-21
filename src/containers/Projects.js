import React from "react";
import data from "../data";
import imgPost1 from "../images/imgPost1.PNG";
import imgPost2 from "../images/imgPost2.PNG";
import imgPost3 from "../images/imgPost3.PNG";
import PostBottomContent from "../components/PostBottomContent";


const Projects = () => (
    <div className="Projects">
        {
            data[0].posts.map((post) =>
                <div className={"Post" + post.id}>
                    <div className={"post" + post.id + "-grey-shadow"}/>
                    <img className="post-image" src={post.image}/>
                    <div className="post-text-container">
                        <span className="post-header">
                            <br/>{post.title}
                        </span>
                        <span className="post-text">
                            <br/>
                            <br/>{post.description}
                        </span>
                    </div>

                    <div className="post-circle-column">
                        <div className="post-circle-container">
                            <img className="post-circle" src={post.circleData}/>

                            <div className="post-circle-column">
                                <span className="post-circle-text">
                                    <br/>необходимо собрать
                                </span>
                                <span className="post-circle-header">
                                    <br/><span className="post-circle-header-green">45 194</span> из 1 000 000 RUB
                                </span>
                            </div>
                            <div className="post-circle-column">
                                <span className="post-circle-text">
                                    <br/>конец
                                </span>
                                <span className="post-circle-header">
                                    <br/>завтра
                                </span>
                            </div>
                        </div>
                        <div className="post-circle-container">
                            <div className="post-circle-border">
                                <span className="post-circle-border-text">
                                    помощь нуждающимся
                                </span>
                            </div>
                            <div className="post-circle-border">
                                <span className="post-circle-border-text">
                                    закят
                                </span>
                            </div>
                        </div>
                    </div>


                    {(post.id === 1) ? null :
                     (post.id === 3) ? null :
                     (post.id === 2) ?
                     (<div className="fond-post-button-container">
                         <button className="fond-post-button">
                             <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M15.8691 10.088C15.7006 9.82741 15.4648 9.67851 15.1616 9.67851C14.5888 9.67851 13.9149 9.93909 13.4096 10.3113C12.9379 10.6836 12.2303 11.3536 11.6239 12.5076C11.5228 12.731 11.3206 12.8799 11.1185 12.9171C11.1185 12.8799 11.1185 12.8054 11.1185 12.7682C11.1185 12.6565 11.1185 12.5076 11.1185 12.3587V4.09475C11.1185 3.2758 10.512 2.60575 9.77078 2.60575C9.02955 2.60575 8.42309 3.2758 8.42309 4.09475V9.86464C8.42309 9.97631 8.3557 10.0508 8.25463 10.0508C8.15355 10.0508 8.08616 9.97631 8.08616 9.86464V1.489C8.08616 0.670051 7.4797 0 6.73847 0C5.99724 0 5.39078 0.670051 5.39078 1.489V9.86464C5.39078 9.97631 5.32339 10.0508 5.22231 10.0508C5.12124 10.0508 5.05385 9.97631 5.05385 9.86464V3.16413C5.05385 2.45685 4.51477 1.86125 3.87462 1.86125C3.23447 1.86125 2.69539 2.45685 2.69539 3.16413V10.6091C2.69539 10.7208 2.628 10.7953 2.52693 10.7953C2.42585 10.7953 2.35846 10.7208 2.35846 10.6091V5.95601C2.35846 5.24873 1.81939 4.65313 1.17923 4.65313C0.539078 4.65313 0 5.24873 0 5.95601V16.0812C0.336924 21.2927 3.20077 22 5.99724 22C8.28832 22 10.3772 20.7343 11.388 18.7242C11.5228 18.5008 11.8597 17.868 12.2977 17.1235C13.3422 15.2995 14.2182 13.7733 14.3529 13.4755C14.6562 12.8799 14.9594 12.3959 15.2963 12.0981C15.5996 11.8376 15.768 11.5025 15.9028 11.2047C16.0039 11.0558 16.0713 10.4975 15.8691 10.088Z" fill="white"/>
                             </svg>
                         </button>
                     </div>) : null
                    }



                </div>
            )
        }

    </div>


)


export default Projects;