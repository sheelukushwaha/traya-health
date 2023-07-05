import React from 'react'
import style from './Journey.module.scss'
import Button from '../Button/Button'

const Journey = () => {
    const journeyData = [
        {
            title1: "Take the Hair Test",
            title2: "An online test that assess the root cause of your hair loss",
            link: "https://form.traya.health/questions?cohort=1&amp;location=HomeSlideshow&amp;page=home",
            imgsrc: "//traya.health/cdn/shop/files/in1_large_a6dbc17f-eda3-4133-817d-59267fe834dc_large.png?v=1663325654",
            alt: "files/in1_large_a6dbc17f-eda3-4133-817d-59267fe834dc.png",
            step: "STEP  1",
            duration: "takes 2-4 mins"
        },
        {
            title1: "Buy the Plan",
            title2: "On the basis of your responses, a team of doctors recommend a treatment plan.",
            link: "https://form.traya.health/questions?cohort=1&amp;location=HomeSlideshow&amp;page=home",
            imgsrc: "//traya.health/cdn/shop/files/in2_large_f53022a3-92a1-42fd-bb95-a4c8dafc48eb_large.png?v=1663325658",
            alt: "files/in1_large_a6dbc17f-eda3-4133-817d-59267fe834dc.png",
            step: "STEP  2",
            duration: "takes 5 mins"
        },
        {
            title1: "Start Hair Growth",
            title2: "You get a free diet plan and a personal hair coach to guide you throughout your journey.",
            link: "https://form.traya.health/questions?cohort=1&amp;location=HomeSlideshow&amp;page=home",
            imgsrc: "//traya.health/cdn/shop/files/live-chat-01_2_large.png?v=1683032617",
            alt: "files/in1_large_a6dbc17f-eda3-4133-817d-59267fe834dc.png",
            step: "STEP  3",
            duration: "takes 3-5 months"
        }
    ]
    return (
        <div className={style.journey}>
            <div className={style.container}>
                <p className={style.heading}>The Traya Journey</p>
                <div className={style.row}>
                    {
                        journeyData.map((data, index) => {
                            return (
                                <div className={style.textJourney}>
                                    <a href={data.link} id="homepage" data-resultform="">
                                        <div className={style.journeyMain}>
                                            <div className={style.journeyWrapper}>
                                                <h4 className={style.link}>{data.title1}</h4>
                                                <h5>{data.title2}</h5>
                                            </div>
                                            <div className={style.stepDurationContainer}>
                                                <div className={style.stepContainer}>
                                                    <img alt={data.alt} data-src={data.imgsrc} src={data.imgsrc} />
                                                    <div className={style.step}>
                                                        <h3>{data.step}</h3>
                                                        <p>({data.duration})</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
                <h5 className={style.traya_journy_bottom_text}>Regrow your hair with a personal hair coach</h5>
                <div className={style.btn}>
                    <Button reverse={true} />
                </div>
            </div>
        </div>
    )
}

export default Journey