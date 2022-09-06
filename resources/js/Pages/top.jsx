import React, { useRef, useState, useEffect } from "react"
import { Link, Head, useForm } from '@inertiajs/inertia-react';
import './css/main.css';
import Book2 from './css//image/IMG_4376.jpg';
import Book from './css//image/IMG_4379.jpg';
import Poster from './css//image/poster.png';
import HTMLFlipBook from 'react-pageflip';
import styled from 'styled-components';

const BookStyle = styled.h1`
        margin-top:50px;
        margin-left:20%;
    `;

const WhiteStyle = styled.div`
        background-color: white;
    `;

export default function Welcome(props) {

    useEffect(() =>{
        arryDivide(dummyArr, 10);
    },[])

    const [tenDividedDiaries, setTenDividedDiaries] = useState([]); //渡されたデータを分割したデータ
    const dummyArr = [].concat(props.diaries);
    function arryDivide(arr, num) {  //配列を分割してtenDivideDiariesに代入していく
        let tmpArr;
        let tmpDivide = [];
        while (arr.length > 0) {
            tmpArr = arr.splice(0, num);
            tmpDivide.push(tmpArr);
        }
        setTenDividedDiaries(tmpDivide);
    }

    const { data, setData, post, errors, processing } = useForm({
        title: "",
        body: "",
        year:'',
        date: "",
    });

    const [flipSpeed, setFlipSpeed] = useState(500); //flipをめくる速度をstateで管理しようと思ったけどできなかった。

    const createForm = (  //記事作成画面。多分飾りになる
        <form
            onSubmit={onSubmit}
            className="pt-6 pb-8 mb-4 flex flex-col gap-4"
        >
            <div>
                <label
                    htmlFor="title"
                    className="block text-gray-700 text-sm font-bold mb-2"
                >
                    タイトル
                </label>
                <input
                    id="title"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={data.title}
                    placeholder="例：イナズマロックフェス"
                    maxLength="15"
                    onChange={(e) =>
                        setData("title", e.target.value)
                    }
                />
                {errors.title && (
                    <div className="text-red-600">
                        {errors.title}
                    </div>
                )}
            </div>
            <div>
                <input type="text" className="" value={data.year} onChange={(e) => {setData("year", e.target.value);}}/>
                {errors.year && (<div className="text-red-600">{errors.year}</div>)}
            </div>
            <div>
                <input type="date" className="" value={data.date} onChange={(e) => {setData("date", e.target.value);}}/>
                {errors.date && (<div className="text-red-600">{errors.date}</div>)}
            </div>
            <div>
                <label
                    htmlFor="description"
                    className="block text-gray-700 text-sm font-bold mb-2"
                >
                    イベントについて
                </label>
                <textarea
                    id="description"
                    className='note'
                    value={data.body}
                    onChange={(e) => {
                        setData("body", e.target.value);
                    }}
                >

                </textarea>
                {errors.body && (
                    <div className="text-red-600">
                        {errors.body}
                    </div>
                )}
            </div>

            <div className="flex justify-end pr-2">
                <button
                    type="submit"
                    disabled={processing}
                    className="postButton w-1/4 h-10 text-xs text-black font-bold rounded border border-black focus:outline-none focus:shadow-outline"
                >
                    投稿
                </button>
            </div>
        </form>
    );

    const  book  =  useRef () ;  //本のページをめくるのに必要

    const sleep = waitTime => new Promise( resolve => setTimeout(resolve, waitTime) );  //引数に入力した数字だけ動作を停止

    function onSubmit(e) {  //submit関数。多分ここでは使わない。
        e.preventDefault();
        post("/events/store");
    }

    async function flipMany(n, speed=1000)  {
        setFlipSpeed(200);  //速度200をセットしてるけど何も変わらず...
        for (let i of [...Array(Number(n))]) {
            book.current.pageFlip().flipNext(); //次のフリップへ（アニメーション付き）
            await sleep(speed); //デフォルトなら
        }
    }

    function FadeInLinkClick() {
        const frame = document.getElementById("fadeLayer");
        frame.className = "FadeInFrame fadein";
        frame.style.visibility = "visible";
        frame.addEventListener('transitionend', () => {
            FadeOut();
        })
    }

    function FadeOut() {
        const frame = document.getElementById("fadeLayer");
        frame.className = "FadeInFrame";
        frame.style.visibility = "hidden";
    }

    return (
        <div className='content'>
            <div className="paper">
                <div id="fadeLayer" className="FadeInFrame"></div>
                <h2>松本家架空日記とは</h2>
                <p>現在の私たちが松本家の歴史に参加し続きの物語を紡ぐことができるように『松本家架空日記』を用意しました。
                    架空の日記を書くことを通じてみなさんは歴史の隠れた1ページあるいはこれから先の1ページに参加することができます。
                    登場人物はあなたでもあなたではない誰かでも構いません。
                    ある縄文時代から遥か未来までのどこか1日を選んで松本家で起こるかもしれないある日の物語を書いてください。
                    このWebページから架空日記を投稿することができ、日記はリアルタイムで展示会場に反映されます。</p>
                <p>
                    PCの方は表紙にカーソルを合わせると、タブレットの方は表紙をタップすると、『松本家架空日記』が開きます。
                </p>
            </div>
            <BookStyle>
            <HTMLFlipBook
                width={500}
                height={700}
                showCover={true}
                drawShadow={true}
                ref={book}
                flippingTime={flipSpeed}
            >
                <div className="demoPage"><img src={Poster} ></img></div>
                <div className="demoPage"><img src={Poster} ></img></div>
                <WhiteStyle>
                    <button onClick={() => {
                        book.current.pageFlip().flip(4)
                    }}>
                        <div className="menu">
                            <h1>一覧を見る</h1>
                        </div>
                    </button>
                    <a href='/diary/random'>
                        <div className="menu">
                            <h1>日記を開く</h1>
                        </div>
                    </a>
                    <button onClick={() => {book.current.pageFlip().flip(13)}}>
                        <div className="menu">
                            <h1>日記を書く</h1>
                        </div>
                    </button>
                    <button type="button" onClick={FadeInLinkClick}>暗転テスト</button>
                    <Link href={ route('register')}>ユーザー登録</Link>
                </WhiteStyle>
                {tenDividedDiaries.map((diaries, index) => (
                    <WhiteStyle>
                        {diaries.map((diary, i) => (
                            <div>
                                <button onClick={() => {book.current.pageFlip().flip(index*10 + 3 + tenDividedDiaries.length + i)}}>{diary.title}</button>
                                <button>{index*10 + 3 + tenDividedDiaries.length + i}</button>
                            </div>
                        ))}
                    </WhiteStyle>
                ))}

                {props.diaries.map((diary, index)=> (
                    <WhiteStyle className="demoPage">
                        <p>{diary.year}年</p>
                        <p>{diary.date}</p>
                        <p>{diary.title}</p>
                        <p>{diary.body}</p>
                        <p>{index+3+tenDividedDiaries.length}p</p>
                    </WhiteStyle>
                ))}
                <div className="demoPage"><img src={Book2}></img></div>
                <div className="demoPage"><img src={Book2}></img></div>
                <WhiteStyle>
                    <p>松本家架空日記</p>
                    {createForm}
                </WhiteStyle>
                <WhiteStyle>
                    <p>松本家架空日記</p>
                    {createForm}
                </WhiteStyle>
                <WhiteStyle>
                    <p>松本家架空日記</p>
                    {createForm}
                </WhiteStyle>
                <WhiteStyle>
                    <p>松本家架空日記</p>
                    {createForm}
                </WhiteStyle>

            </HTMLFlipBook>
            </BookStyle>
            <button onClick={()=> {book.current.pageFlip().flip(2)}}>目次</button>
        </div>
    );
}
