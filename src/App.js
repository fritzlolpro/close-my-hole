import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import types from "./types";
import Dropdown from "react-dropdown";
import fits from "./fits";

const whList = Object.keys(types).map(function(key) {
	return [key, types[key]];
});

const whTypes = whList.map(item => item[0]);

let favoriteHoles = [];

const lsTest = () => {
	var test = "test";
	try {
		localStorage.setItem(test, test);
		localStorage.removeItem(test);
		return true;
	} catch (e) {
		return false;
	}
};

if (lsTest() && localStorage.getItem("favoriteHoles")) {
	favoriteHoles = [localStorage.getItem("favoriteHoles")][0].split(",");
}

// [localStorage.getItem("favoriteHoles")][0].length > 1
// 	? [localStorage.getItem("favoriteHoles")][0].split(",")
// 	: [];

//this is for debug
if (!favoriteHoles.includes("H900") && !favoriteHoles.includes("H900")) {
	favoriteHoles.push("H900", "X877");
}

class App extends Component {
	constructor(props) {
		super(props);
		this.setFavorite = this.setFavorite.bind(this);
		this.removeFavorite = this.removeFavorite.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.setPopularHole = this.setPopularHole.bind(this);
		this.jumpThroughHole = this.jumpThroughHole.bind(this);
		this.state = {
			selected: null,
			maxMass: 0,
			maxSingleMass: 0,
			destanation: "",
			maxHours: 0,
			currentMass: 0,
			ship: "",
			stepNumber: 1,
			history: [],
			favoriteHoles: favoriteHoles
		};
	}

	onSelect(option) {
		this.setState({
			selected: option.value,
			maxMass: types[option.value].maxMass,
			maxSingleMass: types[option.value].maxSingleMass,
			destanation: types[option.value].destination,
			maxHours: types[option.value].maxHours,
			currentMass: types[option.value].maxMass,
			ship: types[option.value].shipToClose,
			history: [],
			stepNumber: 1
		});
	}

	setPopularHole(e) {
		this.setState({
			selected: e.target.value,
			maxMass: types[e.target.value].maxMass,
			maxSingleMass: types[e.target.value].maxSingleMass,
			destanation: types[e.target.value].destination,
			maxHours: types[e.target.value].maxHours,
			currentMass: types[e.target.value].maxMass,
			ship: types[e.target.value].shipToClose,
			history: [],
			stepNumber: 1
		});
	}

	setFavorite(e) {
		if (!favoriteHoles.includes(e.target.value)) {
			favoriteHoles.push(e.target.value);
			localStorage.setItem("favoriteHoles", favoriteHoles);
			this.setState({ favoriteHoles: favoriteHoles });
		}
	}

	removeFavorite(e) {
		const index = favoriteHoles.indexOf(e.target.value);

		if (index > -1) {
			favoriteHoles.splice(index, 1);
			localStorage.setItem("favoriteHoles", favoriteHoles);
			this.setState({ favoriteHoles: favoriteHoles });
		}
	}

	jumpThroughHole(e) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);

		this.setState({
			currentMass: this.state.currentMass - parseInt(e.target.value),
			history: history.concat([
				`#${this.state.stepNumber} ${e.target.getAttribute("label")} with ${(
					e.target.value / 1000
				).toLocaleString()} mass`
			]),
			stepNumber: history.length + 2
		});
	}
	disruptHole = e => {
		this.setState({
			currentMass: this.state.maxMass * e.target.value
		});
	};

	render() {
		const defaultOption = this.state.selected;

		const history = this.state.history.map((e, k) => (
			<li key={k}>
				<span>{e}</span>
			</li>
		));

		let countJumpsWithoutProp = 0,
			countJumpsWithProp = 0;

		const holeCurrentMass = this.state.currentMass;
		const ship = this.state.ship;
		const shipMass = {
			prop: ship === "" ? null : fits[ship].mass.prop,
			noprop: ship === "" ? null : fits[ship].mass.noprop
		};

		const calculateJumps = (massWithoutProp, massWithProp) => {
			countJumpsWithoutProp = Math.ceil(holeCurrentMass / shipMass.noprop);
			countJumpsWithProp = Math.ceil(holeCurrentMass / shipMass.prop);

			const searchForMin = (a, b) => {
				let noPropPossibleJumps = [];
				let propPossibleJumps = [];
				let minNumOfJumps = Math.ceil(a + b);
				let numOfJumps = Math.ceil(a + b);

				for (let i = 0; i < a; i++) {
					noPropPossibleJumps.push(i);
				}
				for (let j = 0; j < b; j++) {
					propPossibleJumps.push(j);
				}
				noPropPossibleJumps.forEach(e => {
					propPossibleJumps.forEach(k => {
						if (
							e * shipMass.noprop + k * shipMass.prop >= holeCurrentMass &&
							e * shipMass.noprop + k * shipMass.prop <
								holeCurrentMass + shipMass.prop &&
							(e + k) % 2 === 0
						) {
							numOfJumps = Math.ceil(e + k);
							// console.log(e, k);
							if (minNumOfJumps > numOfJumps) {
								minNumOfJumps = numOfJumps;
								console.log(
									`Jumps: ${numOfJumps}, noprop jumps: ${e}, prop jumps: ${k}`
								);
								countJumpsWithoutProp = e;
								countJumpsWithProp = k;
							}
						}
					});
				});
			};
			// if (minNumOfJumps > numOfJumps){
			searchForMin(countJumpsWithoutProp, countJumpsWithProp);
		};
		if (ship !== "") {
			calculateJumps(shipMass.noprop, shipMass.prop);
		}
		console.log(shipMass);

		const fitting =
			ship === ""
				? [<span key="0"> </span>]
				: fits[ship].fit.map((e, k) => <span key={k}>{e}</span>);

		return (
			<div className="App">
				<Displayplate
					shoulddisplay={favoriteHoles === [] ? false : true}
					header="Select Wormhole"
					className="global-plate"
				>
					<Dropdown
						className="dropdown"
						options={whTypes}
						onChange={this.onSelect}
						value={defaultOption}
						placeholder=""
					/>
					<Favbutton
						value={this.state.selected}
						onClick={this.setFavorite}
						label="+"
						inlist={favoriteHoles.includes(this.state.selected)}
					/>

					<FavoriteHoles
						favHoles={this.state.favoriteHoles}
						onClick={this.setPopularHole}
						onDelete={this.removeFavorite}
					/>
				</Displayplate>

				<Displayplate
					shoulddisplay={this.state.selected ? true : false}
					header="Hole info"
					className="global-plate"
				>
					<Info>
						{[
							`Hole destination:${this.state.destanation}`,
							`Lifetime:${this.state.maxHours}`,
							`Maximum hole mass:${(
								this.state.maxMass / 1000
							).toLocaleString()} tonn`,
							`Maximum mass that pass throught hole:${(
								this.state.maxSingleMass / 1000
							).toLocaleString()} tonn`
						]}
					</Info>
				</Displayplate>

				<Displayplate
					shoulddisplay={ship === "" ? false : true}
					header="Recommended Ship"
					className="global-plate"
				>
					<Info>{fitting}</Info>
					<Info>
						{[
							`Propulsion mass: ${(
								shipMass.prop / 1000
							).toLocaleString()} tonn`,
							`Regular mass: ${(shipMass.noprop / 1000).toLocaleString()} tonn`
						]}
					</Info>
				</Displayplate>

				<Displayplate
					shoulddisplay={this.state.selected ? true : false}
					header="Current hole"
					className="global-plate"
				>
					<Info>
						{[
							`currentMass: ${(
								this.state.currentMass / 1000
							).toLocaleString()} tonn`,
							`Perform ${countJumpsWithoutProp} no-prop jumps and ${
								countJumpsWithProp
							} prop jumps to close this hole`
						]}
					</Info>

					<Button value="0.5" label="Disrupt hole" onClick={this.disruptHole} />
					<Button value="0.1" label="Crit hole" onClick={this.disruptHole} />
					<Displayplate shoulddisplay={shipMass.prop}>
						<Button
							value={shipMass.prop}
							label="prop jump"
							onClick={this.jumpThroughHole}
						>
							Prop Jump
						</Button>

						<Button
							value={shipMass.noprop}
							label="no-prop jump"
							onClick={this.jumpThroughHole}
						>
							No-prop Jump
						</Button>
					</Displayplate>
					<Info>{history}</Info>
				</Displayplate>
			</div>
		);
	}
}

const Info = ({ className = "stat-list", children }) => {
	return children.map((e, k) => <div key={k}>{e}</div>);
};

const Button = ({
	className = "standart-button",
	value,
	label = "",
	onClick,
	children = label
}) => {
	return (
		<Butt value={value} label={label} onClick={onClick} className={className}>
			{children}
		</Butt>
	);
};
const Butt = styled.button`
	font-weight: 600;
	background-color: #9effff;
	border: 1px solid black;
	border-radius: 2px;
	font-family: "Roboto Condensed", sans-serif;
	width: 142px;
	height: 35px;
	margin-right: 6px;
	&.delete-button,
	&.add-favorite-button {
		font-weight: 900;
		font-size: 12px;
		width: 35px;
		height: 35px;
		color: #35434d;
		background-color: #ffc600;
		/* border-radius: 50%; */
		&:not(:hover) {
			opacity: 0;
		}
	}
	&:hover + .delete-button {
		opacity: 1;
	}
	&.add-favorite-button {
		background-color: #ffc600;
	}
`;

const FavoriteHoles = ({ className = "", favHoles, onClick, onDelete }) => {
	if (favHoles.length > 0) {
		const favs = favHoles.map((e, k) => (
			<div key={k}>
				<Button value={e} onClick={onClick} label={e} />
				<Button
					value={e}
					onClick={onDelete}
					className={`delete-button ${className}`}
					label="—"
				/>
			</div>
		));
		return favs;
	} else {
		return null;
	}
};

const Favbutton = ({
	className = "add-favorite",
	onClick,
	value,
	label = value,
	inlist
}) => {
	if (value && !inlist) {
		return (
			<Fav className={className}>
				<Button
					value={value}
					onClick={onClick}
					className={`add-favorite-button`}
					label={label}
				/>
			</Fav>
		);
	} else {
		return null;
	}
};
const Fav = styled.div`
	display: inline-block;
	position: absolute;
	vertical-align: middle;
`;

const Header = ({ className = "header", children }) => {
	return <Head className={className}>{children}</Head>;
};
const Head = styled.h1`
	text-align: center;
	margin-bottom: 8px;
	font-weight: 900;
`;
const Displayplate = ({
	shoulddisplay,
	header = "",
	className = "display-plate",
	children
}) => {
	if (shoulddisplay) {
		return (
			<Plate className={className}>
				<Header>{header}</Header>
				{children}
			</Plate>
		);
	} else {
		return null;
	}
};

const Plate = styled.div`
	background-color: #193549;
	justify-self: stretch;
	&.global-plate {
		padding: 8px;
	}

`;

export default App;
