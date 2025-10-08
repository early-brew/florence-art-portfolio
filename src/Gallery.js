import { Row, Grid, Col, Card, Image } from "antd";

import cabo from './img/cabo.jpg';
import hammelviews from './img/hammel_views.JPG'
import yamnuska from './img/yamnuska_trail.jpg'
import yukon from './img/yukon.jpg'
import jivin_cowboy from './img/jivin_cowboy.jpg'
import isolated_cabins from './img/isolated_cabins.jpg'
import remote_treehouse from './img/remote_treehouses.jpg'
import je_naime_plus from './img/je_naime_plus_les_cowboys.jpg'


const { Meta } = Card;

const images = [
    { src: cabo, title: 'Cabo, 2024' },
    { src: hammelviews, title: 'Views from Mt. Hammel, 2025' },
    { src: yamnuska, title: 'Yamnuska Trails, 2023' },
    { src: yukon, title: 'Yukon Wilderness, 2025' },
    { src: jivin_cowboy, title: 'Jivin Cowboy, 2021' },
    { src: je_naime_plus, title: "Je n'aime plus les cowboys, 2021" },
    { src: isolated_cabins, title: 'Isolated Cabins, 2020' },
    { src: remote_treehouse, title: 'Remote Treehouse, 2020' },

];


export default function Gallery() {
    return (
        <Row gutter={[16, 16]}>
            {images.map((item, index) => (
                <Col xs={12} sm={8} md={6} key={index}>
                    <Card
                        hoverable
                        cover={
                            <Image
                                alt={item.title}
                                src={item.src}
                                style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
                            />
                        }
                    >
                        <Meta title={item.title} />
                    </Card>
                </Col>
            ))}
        </Row>
    );
}