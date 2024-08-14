import React, { Component } from "react";

const PortfolioListContent = [
    {
        image: 'image-12',
        category: 'financial-ai-tool',
        title: 'AI tool for  investment researchers and advisors.'
    },
    {
        image: 'image-1',
        category: 'sass-product',
        title: 'Development of SaaS Product'
    },
    {
        image: 'image-2',
        category: 'customer-portal',
        title: 'Car Automation Customer Portal'
    },
    {
        image: 'image-3',
        category: 'mvp-food-industry',
        title: 'MVPs for food & beverage industry'
    },
    {
        image: 'image-4',
        category: 'emission-dashboard',
        title: 'Carbon Emission Dashboard'
    },
    {
        image: 'image-5',
        category: 'elderly-app',
        title: 'Eldery People Assistance App'
    },
    {
        image: 'image-6',
        category: 'training-tool',
        title: 'Insite Training Tool'
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        console.log("list>>l",list)
        return(
            <React.Fragment> 
                {PortfolioListContent.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <h4><div>{value.title}</div></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href={`/portfolio-details/${value.category}`}>View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;