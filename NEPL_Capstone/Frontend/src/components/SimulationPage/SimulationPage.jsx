import React from "react";
import {
	colors,
	Container,
} from "@mui/material";
import * as color from "../../assets/colorPalette";
import { Link, renderMatches } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

import Question from "../../assets/Question.svg";
import EmailSim from "../../assets/EmailSim.svg";
import PhishingImg from "../../assets/PhishingImg.svg";
import EmailButton from "../../assets/EmailButton.svg";
import LinkButton from "../../assets/LinkButton.svg";
import Wrong from "../../assets/Wrong.svg";
import ReportButton from "../../assets/ReportButton.svg";
import Right from "../../assets/Right.svg";
import dots from "../../assets/dots.svg";

import { StyledBadge } from "../ManagerDashboard/EmployeeTable/StyledBadge";
import { Modal, Dropdown, Text, Button } from "@nextui-org/react";
import API from "../../services/apiClient";
import { useAuthContext } from "../../contexts/auth";


export default function SimulationPage() {
	return (
		<>
			<Navbar />
			<Simulation />
			<Footer />
		</>
	);
}

function Simulation() {
	const [isStarted, setIsStarted] = useState(false);
	return (
		<Container
			maxWidth={false}
			style={{
				display: "flex ",
				flexDirection: "column",
				backgroundColor: color.platinum,
				height: "145vh",
				width: "75%",
				marginTop: "100px",
				marginBottom: "100px",
			}}
		>
			<h1>Email Phishing</h1>
			<Container style={{ display: "flex", flexDirection: "row" }}>
				<Container sx={{ margin: "0" }}>
					<p style={{ fontWeight: "bold", color: "green" }}>Do's</p>
					<li>something</li>
					<li>something</li>
					<li>something</li>
				</Container>
				<Container style={{ marginLeft: "0vw" }}>
					<p style={{ fontWeight: "bold", color: "red" }}>Don'ts</p>
					<li>something</li>
					<li>something</li>
					<li>something</li>
				</Container>
			</Container>
			<p>What you wil be doing :</p>
			<p style={{ marginTop: "0vw" }}>
				SOMETHING SOMETHINGSOMETHING SOMETHINGSOMETHING SOMETHINGSOMETHING
				SOMETSOMETHING SOMETHINGSOMETHING SOMETHINGSOMETHING SOMETHINGSOMETHING
				SOMETSOMETHING SOMETHINGSOMETHING SOMETHINGSOMETHING SOMETHINGSOMETHING
				SOMET
			</p>
			<Container
				maxWidth={false}
				sx={{
					display: "flex",
					backgroundColor: color.languidLavender,
					height: "89vh",
					borderRadius: "2vw",
					width: "100%",
				}}
			>
				<Container
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						textAlign: "center",
						alignItems: "center",
						height: "86vh",
					}}
				>
					{!isStarted ? (
						<Button
							style={{
								display: "flex",
								backgroundColor: "black",
								color: "white",
								height: "6vh",
								width: "7vw",
								borderLeft: "4px solid white",
								borderBottom: "4px solid white",
							}}
							onClick={() => {
								setIsStarted(!isStarted);
							}}
						>
							Start Simulation
						</Button>
					) : null}
					{isStarted ? <EmailRender /> : null}
				</Container>
			</Container>
		</Container>
	);
}

function EmailRender() {
	const [isClicked, setIsClicked] = useState(false);
	const [isRight, setIsRight] = useState(false);
	const [isWrong, setIsWrong] = useState(false);
	const [isToggled, setIsToggled] = useState(false);
	const [visible, setVisible] = React.useState(false);
	const [visible2, setVisible2] = React.useState(false);
	const handler = () => setVisible(true);
	return (
		<Container>
			{!isClicked ? (
				<Button
					onClick={() => setIsClicked(!isClicked)}
					css={{
						position: "relative",
						top: "26.4%",
						left: "16.2%",
						background: "none",
						width: "90%",
					}}
					size="xl"
				>
					<img
						src={EmailButton}
						style={{ display: "flex", height: "auto", width: "2%" }}
					/>
				</Button>
			) : null}
			{isClicked ? (
				<img src={PhishingImg} style={{ width: "100%" }} />
			) : (
				<img src={EmailSim} style={{ display: "flex", width: "100%" }} />
			)}
			{isClicked ? (
				<Button
					onClick={() => setVisible(!visible)}
					css={{
						position: "relative",
						bottom: "46%",
						left: "40%",
						width: "30%",
					}}
					style={{ background: "none" }}
				>
					<img src={LinkButton} style={{ display: "flex", size: "100%" }} />
				</Button>
			) : null}

			{isClicked ? (
				<Dropdown>
					<Dropdown.Button
						size="xs"
						color={color.platinum}
						style={{ position: "relative", left: "94%", bottom: "72.1%" }}
					>
						<img src={dots} style={{ display: "flex" }} />
					</Dropdown.Button>
					<Dropdown.Menu aria-label="Static Actions">
						<Dropdown.Item>
							<Button
								auto
								color="transparent"
								onClick={() => setVisible2(true)}
								css={{ width: "100%", background: "none" }}
							>
								Report
							</Button>
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			) : null}

			<WrongPopUp
				handler={handler}
				visible={visible}
				setVisible={setVisible}
				style={{ width: "10%" }}
			/>
			<RightAnswer
				handler={handler}
				visible={visible2}
				setVisible={setVisible2}
				style={{ width: "10%" }}
			/>
		</Container>
	);
}

function WrongPopUp({ handler, visible, setVisible }) {
	const closeHandler = () => {
		setVisible(false);
	};
	return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        width="35%"
        css={{ display: "flex", justifyContent: "center" }}
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <Text
            css={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1 style={{ fontSize: "200%", color:color.errorRed }}>Not Quite right</h1>
            <p>
              This link could have lead to a virus installation on your device
              and caused a lot of trouble.
            </p>
            <p>
              The best way to check if a link is safe is to use a Link scanner
              such as: <a href="https://www.urlvoid.com/" target="_blank">URLVOID</a>
            </p>
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
function RightAnswer({ handler, visible, setVisible }) {
	const { user, setUser } = useAuthContext();

	const closeHandler = () => {
		setVisible(false);
	};

	const nextHandler = async () => {
		const respo = await API.addProgress("1");
		setUser({ ...user, refresh: true });
		delete user.refresh;
	};

	return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        width="35%"
        css={{ display: "flex", justifyContent: "center" }}
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <Text
            css={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1 style={{ fontSize: "200%", color: "green" }}>Good Job</h1>
            <p>
              Great catch, this email is a phishing email because the address
              stated in the message is not the same as an actual salesforce
              address
            </p>
            <p style={{ fontWeight: "bold" }}>
              Salesforce Email: username@salesforce.com ✅
            </p>
            <p style={{ fontWeight: "bold" }}>
              Fake Email: naner@salesforc3.com ❌
            </p>
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto flat color={color.languidLavender} onClick={nextHandler}>
            <Link to="/Sim2">Next</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
