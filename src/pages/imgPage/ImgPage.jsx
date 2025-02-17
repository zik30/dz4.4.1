import { Typography, Card, Button, Spin } from "antd"
import { useState , useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import style from './imgPage.module.css'

const ImgPage = () => {

    const { id } = useParams()
    const [ post, setPost ] = useState({})
    const [img, setImg] = useState()
    const nav = useNavigate()
    const [ loading, setLoading ] = useState(false)

    const getPost = async () => {
        setLoading(true)
        const response = await fetch( 'https://dattebayo-api.onrender.com/characters/'+id)
        const data = await response.json()
        console.log(data);
        
        setPost(data)
        setLoading(false)
        setImg(data.images[0])
    } 

    useEffect ( () => {
        getPost()
    }, [])

    if ( loading  ){
        return (
            <div className={style.spin}>
                <Spin size="large"/>
            </div>
            )
    }

    return (
        <div>
            <h1>Img Page{id}</h1>
            <Button onClick={()=> nav(-1)}>Back</Button>
            <Card title={post.name}
                className={style.card}
                style={{
                    width: 300,
                  }}
                cover={<img alt="example" src={img}/>}
            >
                <Typography>{post.id}</Typography>
            </Card>
        </div>
    )
}

export default ImgPage