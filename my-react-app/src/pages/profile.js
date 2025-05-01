import React from 'react';
import './styles/pageimages.css';
import './styles/profile.css';

import myPic from '../images/mypic.png';
import dance from '../images/dance.jpg';
import danceTimeline from '../images/timeline.png';
import game from '../images/game.jpg';
import hawaii from '../images/hawaii.jpg';

const Introduction = () => {
    return (
        <div className='profile-container'>
            <div className='profile-top'>
                <div className="profile-photo-and-info">
                    <img src={myPic} className="mypic" alt="myself" />
                    <div className="profile-info">
                        <div className="profile-name">
                            <h1>沼田 優里</h1>
                        </div>
                        <div class="info-row">
                            <div className="info-item">
                                <h2>出身地</h2>
                                <p>三重県亀山市</p>
                            </div>
                            <div className="info-item">
                                <h2>出身校</h2>
                                <p>Brigham Young University - Hawaii</p>
                            </div>
                        </div>
                        <div class="info-row">
                            <div className="info-item">
                                <h2>生年月日</h2>
                                <p>1998(H10)年4月11日</p>
                            </div>
                            <div className="info-item">
                                <h2>性格</h2>
                                <p>心配性</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='likes-dislikes'>
                    <div className='likes'>
                        <h2>好きなもの</h2>
                        <div className="like-item">
                            <img src={dance} alt="dance" />
                            <div className="like-item-content">
                                <h3>ダンス</h3>
                                    <img src={danceTimeline} alt="dance timeline" />
                                    <p>
                                        小学生の頃から踊ることが大好きです！高校時代には、未就学児を対象にキッズクラスのインストラクターをしました。
                                        海外留学を機にストリートダンスはやめましたが、ハワイの大学だったためフラダンスに挑戦しました。
                                        ハワイのお友達に教えてもらいながら楽しくフラダンスを学び、時には腰振りで有名なタヒチアンダンスも教えてもらいました！
                                        最近は運動不足解消のためにレッスンを受けに行ったり、踊ってみたの動画をみるのが好きです！
                                        自分が踊ることも、ダンスお教えて楽しさを知ってもらうのも、人が楽しく踊っているのを見るのも、全てが大好きです！
                                    </p>
                            </div>
                        </div>
                        <div className="like-item dance">
                            <img src={game} alt="game" />
                            <div className="like-item-content">
                                <h3>ゲーム</h3>
                                    <p>
                                        大学時代にコロナウイルス蔓延で日本とハワイの行き来の度に、2週間の隔離生活がありました。
                                        2週間外に出られないので、退屈しのぎで購入したPlayStation4で自分がゲーム好きだと気がつきました。
                                        社会人1年目で購入したゲーミングPCは自分で組み立て、そこから楽しくゲームをする日々を送っています。
                                        FPS、RPG、推理、シミュレーション、パズル、リズム、様々な種類のオンラインゲームを楽しんでいます。
                                        また、友達をわいわいボードゲームで遊ぶのも好きです。
                                        最近ではボードゲームカフェというものもあり、ボードゲームを持っていなくても楽しめる施設があるので、友達とそういうところで遊ぶのも好きです。
                                    </p>
                            </div>
                        </div>
                        <div className="like-item">
                            <img src={hawaii} alt="hawaii" />
                            <div className="like-item-content">
                                <h3>ハワイ</h3>
                                    <p>
                                        私が3歳くらいの頃、叔母の結婚式でハワイを訪れたのがきっかけで母がハワイにハマり、数年に1度はハワイを訪れるようになりました。
                                        冬に行っても暖かい気候、綺麗な海、陽気な人々、日本にはない景色や体験がいっぱいで大好きになりました！
                                        大学を決めた理由の一つでもあります。
                                        大学時代は大好きなハワイで生活できたので、大好きな景色を見ながら生活できたのがすごく幸せな思い出です。
                                        大学時代のアルバイトでは、大学に隣接しているポリネシア文化センターでツアーガイドをしました。
                                        ハワイの文化や他のポリネシアの文化を紹介する施設なのですが、植物や建物が昔ながらの建物を再現していたので、毎日のバイトがすごく楽しかったです！
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className='dislikes'>
                        <h2>苦手なもの</h2>
                            <h3>✕ホラー✕</h3>
                                <p>
                                    ホラー映画、ホラーゲーム、お化け屋敷、怖いもの全般苦手です
                                </p>
                            <h3>✕虫✕</h3>
                                <p>
                                    ハワイにいた頃は退治してくれる人もいなかったので、生存本能なのか少し虫には慣れていきましたが、やはり苦手なものは苦手です。
                                </p>
                            <h3>✕人混み✕</h3>
                                <p>
                                    人が多くてにぎやかなところは好きですが、人が多すぎて歩くのが大変なところには苦手意識があります。
                                </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;