import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Categories = () => {
    return (
        <div className='container' style={{marginTop:"90px"}}>
            <h2 className='text-center text-primary mb-4'>Popular Category</h2>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/delicious-chicken-table_144627-8758.jpg?w=740&t=st=1683064804~exp=1683065404~hmac=0061d509b8192fab18ab3c9e48f7d1633a5bb3f8f01f4e53e06184582b90e870" />
                    <Card.Body>
                        <Card.Title className='text-center'>Chicken</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/spicy-fried-tubtim-fish-salad-spicy-thai-food_1150-26481.jpg?w=740&t=st=1683065187~exp=1683065787~hmac=8037f8b872d4752cb73861696d364e1fca0c6b26f62602780c386c115e8f0867" />
                    <Card.Body>
                        <Card.Title className='text-center'>Fish</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/fresh-vegetables-colorful-sliced-such-as-cucumbers-red-tomatoes-onion-wooden-rustic-surface_140725-14178.jpg?w=740&t=st=1683065299~exp=1683065899~hmac=f421633bfb84c747e787538ae0212e6cfc3dd5a66a0434fc9fd247e0d2f0ba98" />
                    <Card.Body>
                        <Card.Title className='text-center'>Salads</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/roasted-pumpkin-carrot-soup-with-cream-black-pepper-pumpkin-seeds-cutting-board-fresh-pumpkin-slices-black-bread_114579-1706.jpg?w=740&t=st=1683065507~exp=1683066107~hmac=ff73471dc518f36b742f4efe0677f1f59c7ca9b97e55a9c54af0a5e556c30b74" />
                    <Card.Body>
                        <Card.Title className='text-center'>Soups</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/delicious-goulash-stew-table_23-2149371730.jpg?w=740&t=st=1683065567~exp=1683066167~hmac=a9e5e2afb09de075d626df57e4ab3bf7288839fa213a102da59f37a542107ac0" />
                    <Card.Body>
                        <Card.Title className='text-center'>Mutton</Card.Title>
                    </Card.Body>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/high-angle-pakistan-meal-composition_23-2148821517.jpg?w=740&t=st=1683065633~exp=1683066233~hmac=986a8ff3c8c7fbc412a290d5954bc391dda98592866af88d2690325981bc8ad3" />
                    <Card.Body>
                        <Card.Title className='text-center'>Briyani</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/front-view-meat-sauce-soup-with-greens-potatoes-dark-desk-soup-meal-sauce-meat_140725-79069.jpg?w=740&t=st=1683065752~exp=1683066352~hmac=89702fc9318adad522a72c5273fa7eb5c7c40747352a1e348c2a7b0bf14ed513" />
                    <Card.Body>
                        <Card.Title className='text-center'>Beef</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://img.freepik.com/premium-photo/cooked-plain-white-basmati-rice-terracotta-bowl_466689-24623.jpg?w=740" />
                    <Card.Body>
                        <Card.Title className='text-center'>Rice</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table_141793-3998.jpg?w=740&t=st=1683065988~exp=1683066588~hmac=5dfc395a78e1a2dd00d6c936eb7c5c2098fbb2dd4de58ba48fc0063e67ff4901" />
                    <Card.Body>
                        <Card.Title className='text-center'>Fastfood</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/top-view-indian-food-bowl_23-2148723475.jpg?w=740&t=st=1683066139~exp=1683066739~hmac=608d1940a5fdcdaca85582030f4468d2079a5908639bbf60860ffebd9e7f71e9" />
                    <Card.Body>
                        <Card.Title className='text-center'>Khichdi</Card.Title>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Categories;