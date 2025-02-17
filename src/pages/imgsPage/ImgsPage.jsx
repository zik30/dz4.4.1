import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { Spin, Button, Card } from "antd";
import style from "./imgsPage.module.css";
const { Meta } = Card;

const ImgsPage = () => {
  const nav = useNavigate();
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getAnimes() {
    setLoading(true);
    const response = await fetch(
      "https://dattebayo-api.onrender.com/characters"
    );
    const data = await response.json();

    setAnimes(data.characters);
    setLoading(false);
  }

  console.log(animes);

  useEffect(() => {
    getAnimes();
  }, []);

  if (loading) {
    return (
      <div className={style.spin}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div>
      <h1>Animes</h1>
      <Button onClick={() => nav(-1)} type="primary">
        BACK
      </Button>

      <div className={style.animes}>
        {animes.map((anime, k) => (
          <div>
            <Link to={"/imgs/" + anime.id}>
              <Card
                key={k + 1}
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={anime.images[0]} />}
              >
                <Meta title={anime.name} description={anime.debut.manga} />
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgsPage;
