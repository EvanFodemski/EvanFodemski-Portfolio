import React from "react";
import '../styles/port.css'
import c7 from '../assets/img/c7.png'
import jate from '../assets/img/JATE.png'
import DB from '../assets/img/DB.png'
import emp from '../assets/img/emp.png'
import bell from '../assets/img/Bellworkcover.png'
import bookSearch from '../assets/img/bookSearch.png'
import colo from '../assets/img/4co.png'
import eleven from '../assets/img/11.png'
import read from '../assets/img/Read.png'


const gitsvg = <svg width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.1 3.1 0 0 0-.292-.382 2.693 2.693 0 0 0-.372-.343 1.841 1.841 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z" /></svg>




export default function Portfolio() {
    return (
        <div className="portfoliemaincon">
            <div className="porttitlehead">
                <h1 className="writingheadport">
                    Projects I have done and helped complete
                </h1>
            </div>
            <div className="boxesConPort">

                <a href="https://github.com/EvanFodemski/BellWork">
                    <div className="portbox">
                        <img className="imagesinport" src={bell} alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h1 className="porthoverhead">BellWork</h1>
                                <p className="innerdescport">
                                    BellWork is a web application created entirely by me. It is a platform for workout enthusiasts to create and share workouts and workout routines.
                                </p>
                                <div className="gitsvg">
                                    {gitsvg}
                                </div>

                            </div>
                        </div>

                    </div>
                </a>

                <a href="https://github.com/ltrokey/c7_recipe_builder">
                    <div className="portbox">
                        <img className="imagesinport" src={c7} alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h1 className="porthoverhead">Recipe Builder</h1>
                                <p className="innerdescport">
                                    Originally named "C7 Recipe Builder", this is a group web application to find recipes with what you have at home, as well as check all food nutrition facts.
                                </p>
                                <div className="gitsvg">
                                    {gitsvg}
                                </div>

                            </div>
                        </div>

                    </div>
                </a>

                <a href="https://github.com/EvanFodemski/BellWork">
                    <div className="portbox">
                        <img className="imagesinport" src={bell} alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h1 className="porthoverhead">BellWork</h1>
                                <p className="innerdescport">
                                    BellWork is a web application created entirely by me. It is a platform for workout enthusiasts to create and share workouts and workout routines.
                                </p>
                                <div className="gitsvg">
                                    {gitsvg}
                                </div>

                            </div>
                        </div>

                    </div>
                </a>

                <a href="https://github.com/EvanFodemski/Greatest-Text-Editor-of-all-time">
                    <div className="portbox">
                        <img className="imagesinport" src={jate} alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h1 className="porthoverhead">OffLine Text Editor</h1>
                                <p className="innerdescport">
                                    A text EDitor that can be downloaded and used offline. Createed using IndexedDB and can be installed as a progressive web application.
                                </p>
                                <div className="gitsvg">
                                    {gitsvg}
                                </div>

                            </div>
                        </div>

                    </div>
                </a>

                <a href="https://github.com/EvanFodemski/1-800-FindYourBook">
                    <div className="portbox">
                        <img className="imagesinport" src={bookSearch} alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h1 className="porthoverhead">Book Search Engine</h1>
                                <p className="innerdescport">
                                    A book search engine developed with the Google Books API along with MongoDB, Express, React, and Node.js.
                                </p>
                                <div className="gitsvg">
                                    {gitsvg}
                                </div>

                            </div>
                        </div>

                    </div>
                </a>


                <a href="https://github.com/EvanFodemski/Media-Startup-DB">
                    <div className="portbox">
                        <img className="imagesinport" src={DB} alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h1 className="porthoverhead">Startup DB</h1>
                                <p className="innerdescport">
                                    A startup database made with mongoose and express for a Media company to have total control over users and actions in their app.
                                </p>
                                <div className="gitsvg">
                                    {gitsvg}
                                </div>

                            </div>
                        </div>
                    </div>
                </a>


                <a href="https://github.com/EvanFodemski/Employee-Tracker">
                    <div className="portbox">
                        <img className="imagesinport" src={emp} alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h1 className="porthoverhead">Employee Database</h1>
                                <p className="innerdescport">
                                    A Database builtfor a manager to keep trac kof employees, roles, and departments. Made with MySQL, Inquirer, and Node.js.

                                </p>
                                <div className="gitsvg">
                                    {gitsvg}
                                </div>

                            </div>
                        </div>

                    </div>
                </a>


                <a href="https://github.com/EvanFodemski/AdrianaForColorado">
                    <div className="portbox">
                        <img className="imagesinport" src={colo} alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h1 className="porthoverhead">Paid Work</h1>
                                <p className="innerdescport">
                                    Application made for a client to support their political campaign.
                                </p>
                                <div className="gitsvg">
                                    {gitsvg}
                                </div>

                            </div>
                        </div>

                    </div>
                </a>



                <a href="https://github.com/EvanFodemski/BellWork">
                    <div className="portbox">
                        <img className="imagesinport" src={bell} alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h1 className="porthoverhead">BellWork</h1>
                                <p className="innerdescport">
                                    BellWork is a web application created entirely by me. It is a platform for workout enthusiasts to create and share workouts and workout routines.
                                </p>
                                <div className="gitsvg">
                                    {gitsvg}
                                </div>

                            </div>
                        </div>

                    </div>
                </a>



                <a href="https://github.com/EvanFodemski/9-node-EF">
                    <div className="portbox">
                        <img className="imagesinport" src={read} alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h1 className="porthoverhead">ReadMe Generator</h1>
                                <p className="innerdescport">
                                    A ReadMe generator created with Node, used on locall installation.                                </p>
                                <div className="gitsvg">

                                    {gitsvg}
                                </div>
                            </div>


                        </div>
                    </div>
                </a>

                <a href="https://github.com/EvanFodemski/11-Express-EF">
                    <div className="portbox">
                        <img className="imagesinport" src={eleven} alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h1 className="porthoverhead">Note Taker</h1>
                                <p className="innerdescport">
                                    A Note Taking application made with express and deployed to Heroku                          </p>
                                <div className="gitsvg">
                                    {gitsvg}
                                </div>

                            </div>
                        </div>

                    </div>
                </a>

                <a href="https://github.com/EvanFodemski/BellWork">
                    <div className="portbox">
                        <img className="imagesinport" src={bell} alt="" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h1 className="porthoverhead">BellWork</h1>
                                <p className="innerdescport">
                                    BellWork is a web application created entirely by me. It is a platform for workout enthusiasts to create and share workouts and workout routines.
                                </p>
                                <div className="gitsvg">
                                    {gitsvg}
                                </div>

                            </div>
                        </div>

                    </div>

                </a>
            </div>

        </div>
    );
}