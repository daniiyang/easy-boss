import React from "react";
import imgPost1 from "../images/imgPost1.PNG";
import imgPost2 from "../images/imgPost2.PNG";
import imgPost3 from "../images/imgPost3.PNG";
import PostBottomContent from "./AboutCarouselButtons";
import {posts} from "../data";
import {userType} from "../App";
import {imgFondPostBotton} from "../images/svgs";

//TODO: wave inside circle
const Projects = () => (
    <div className="Projects">
        {
            posts.map((post) =>
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
                            <div className="post-circle-graph-container">
                                <span className="post-circle-graph-grey">
                                    <span className="post-circle-graph-white">
                                        <span className="post-circle-graph-green">
                                            {post.circleData}
                                        </span>
                                        <img className={(post.id === 2) ? "post-circle-graph-wave2" : "post-circle-graph-wave1"} src={post.circleWave}/>
                                    </span>
                                </span>
                            </div>
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
                    <div className={"fond-post-button-container" + post.id}>
                        <button className="fond-post-button">
                            {imgFondPostBotton}
                        </button>
                    </div>
                </div>
            )
        }

    </div>


)


export default Projects;