import React, { Component } from 'react'

export class App extends Component {
	render() {
		return (
				<header>
					<div className='wrapper'>
							<span className='logo'>Невидима рамка</span>
							<ul className='nav'>
								<li>Гравці</li>
								<li>Документація</li>
								<li>Головна</li>
							</ul>
							<div wrapper-sub>
								<img src='./img/ramka.png' className='png-ramka'></img>
								<p className='text-ramka'>На сервере UniOn мы предлагаем особый крафт невидимых рамок, который поможет вам создать уникальные конструкции или эффективно оформить ваш магазин. Для создания невидимых рамок вам понадобится всего лишь четыре обычные рамки и один алмаз. Этот специальный крафт открывает новые возможности для вашего творчества, позволяя вам создавать прозрачные и воздушные структуры, которые придают вашему миру уникальный вид. Развивайте свои идеи и создавайте что-то по-настоящему удивительное с помощью невидимых рамок на сервере UniOn!</p>
							</div>
							<div className='button'>
								<b className='button-2'>Попередня сторінка</b>
								<b className='button-1'>Наступна сторінка</b>
							</div>
					</div>
				</header>
		)
	}
}

export default App

