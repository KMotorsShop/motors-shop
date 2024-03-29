import { Acess, CardImage, CardL, Infos, Pelicula, Status, Time, User } from "./style";

export const CardLeilao = () => {
    return(
        <CardL type="main">
            <Pelicula>
                <CardImage src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/cruze-sport6-rs-carros.jpg?imwidth=960"></CardImage>
                <Infos>
                    <Time>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#4529E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 5V11L15 13" stroke="#4529E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>01:58:00</p>
                    </Time>
                    <h1>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200</h1>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...</span>
                    <User>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="16" fill="#e62929"/>
                        <path d="M12.1186 21V10.8182H15.7479C16.5367 10.8182 17.1913 10.9541 17.7116 11.2259C18.2353 11.4976 18.6264 11.8738 18.8849 12.3544C19.1435 12.8317 19.2727 13.3835 19.2727 14.0099C19.2727 14.633 19.1418 15.1816 18.88 15.6555C18.6214 16.1262 18.2304 16.4924 17.7067 16.7543C17.1863 17.0161 16.5317 17.147 15.7429 17.147H12.9936V15.8246H15.6037C16.1009 15.8246 16.5052 15.7533 16.8168 15.6108C17.1316 15.4683 17.362 15.2611 17.5078 14.9893C17.6536 14.7176 17.7266 14.3911 17.7266 14.0099C17.7266 13.6255 17.652 13.2924 17.5028 13.0107C17.357 12.7289 17.1267 12.5135 16.8118 12.3643C16.5002 12.2119 16.0909 12.1357 15.5838 12.1357H13.6548V21H12.1186ZM17.1449 16.4062L19.6605 21H17.9105L15.4446 16.4062H17.1449Z" fill="white"/>
                    </svg>
                    <h2>Róger Souza</h2>
                    </User>
                    <Status>
                        <span>2013</span>
                        <span>0KM</span>
                        <h2>R$00.000,00</h2>
                    </Status>
                </Infos>
            </Pelicula>
            <Acess>
                <button>Acessar página do leilão</button>
                <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8H27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20 1L27 8L20 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Acess>
        </CardL>
    )
}