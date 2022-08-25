import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    articles= [
        
        {
            "source": {
                "id": "abc-news-au",
                "name": "ABC News (AU)"
            },
            "author": "Elizabeth Byrne",
            "title": "Another victim of former elite junior cricket coach Ian Harold King tells court of lasting impact of his abuse",
            "description": "Ian Harold King, a former Queensland state cricketer, is currently serving a 22-year sentence for offences against 10 other boys.",
            "url": "http://www.abc.net.au/news/2022-08-23/act-coach-ian-harold-king-convicted-sexual-offence-victim-impact/101357908",
            "urlToImage": "https://live-production.wcms.abc-cdn.net.au/4c4989dbeb04702b6957ca9aa2902ded?impolicy=wcms_crop_resize&cropH=552&cropW=981&xPos=0&yPos=0&width=862&height=485",
            "publishedAt": "2022-08-22T20:42:49Z",
            "content": "A Canberra man abused by notorious paedophile Ian Harold King has told the ACT Supreme Court the former elite junior cricket coach \"stole\" his soul.\r\nKey points:\r\n<ul><li>Ian Harold King is serving a… [+2494 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        },
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": "BBC Sport",
            "title": "Shane Warne memorial - watch & follow updates",
            "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
            "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
            "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
            "publishedAt": "2022-03-30T08:22:26.498888Z",
            "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
        }
    ]

    constructor(){
        super();
        console.log("Hello");
        this.state = {
             articles: this.articles,
             loading: false
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h3>News - TOP Headlines</h3>
                
                <div className="row">
                {this.state.articles.map((element)=>{
                   return <div className="col md-4" key={element.url}>
                    <NewsItems title={element.title.slice(0, 40)} description={element.description.slice(0, 70)} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
                })}
                    
                </div>
            </div>
        )
    }
}

export default News
