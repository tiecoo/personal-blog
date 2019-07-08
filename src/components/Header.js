import React from "react"
import { StaticQuery, graphql } from 'gatsby'

const TitleAndDescription = ({data}) =>{
    const background = "https://olhardigital.com.br/uploads/acervo_imagens/2016/06/r16x9/20160628172008_1200_675_-_caiu_cafe_no_notebook__saiba_o_que_fazer.jpg"
    const title = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description
    return (
        <div className="container"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'avenir',
                backgroundColor: "#000",
                height: '300px',
        }}>
            <div></div>
            <div class="jumbotron jumbotron-fluid"
            style={{
                marginTop: '30px',
                opacity: '0.5',
                position: 'absolute'
                }}>
                <div class="container">
                    <h1 class="display-4">{title}</h1>
                    <p class="lead">{description}</p>
                </div>
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <StaticQuery
            query={ graphql`
                query {
                    site {
                        siteMetadata {
                            title
                            description
                        }
                    }
                }
            `}
            render = { data => <TitleAndDescription data={data} />}
        />
    )
}

export default Header