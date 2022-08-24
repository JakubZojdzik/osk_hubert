import './Categories.scss'


export const Categories = () => {
    return (
        <table id="kategorie" className='table'>
            <tbody>
                <tr>
                    <td className="text-primary text-center align-middle fs-3">AM</td>
                    <td>
                        <ul>
                            <li>motorower</li>
                            <li>czterokołowiec lekki (na przykład mały quad)</li>
                            <li>zesp&oacute;ł pojazd&oacute;w &ndash; powyższe pojazdy połączone z przyczepą &ndash; tylko w Polsce</li>
                            <li>Wymagany wiek: 14 lat</li>
                        </ul>
                    </td>
                    <td className="align-middle">1100 zł</td>
                </tr>
                <tr>
                    <td className="text-primary text-center align-middle fs-3">A1</td>
                    <td>
                        <ul>
                            <li>motocykl o pojemności skokowej silnika do 125 cm3, mocy do 11 kW i stosunku mocy do masy własnej do 0,1 kW/kg</li>
                            <li>motocykl tr&oacute;jkołowy o mocy do 15 kW</li>
                            <li>pojazdy z kategorii AM</li>
                            <li>zesp&oacute;ł pojazd&oacute;w &ndash; powyższe pojazdy połączone z przyc2zepą - tylko w Polsce</li>
                            <li>Wymagany wiek: 16 lat</li>
                        </ul>
                    </td>
                    <td className="align-middle">2000 zł</td>
                </tr>
                <tr>
                    <td className="text-primary text-center align-middle fs-3">A2</td>
                    <td>
                        <ul>
                            <li>motocykl, kt&oacute;ry spełnia wszystkie poniższe warunki:
                                <ul>
                                    <li>moc do 35 kW</li>
                                    <li>stosunek mocy do masy własnej do 0,2 kW/kg</li>
                                    <li>nie może on powstać w wyniku wprowadzenia zmian w pojeździe, kt&oacute;rego moc przekracza dwukrotność mocy tego motocykla</li>
                                </ul>
                            </li>
                            <li>motocykl tr&oacute;jkołowy o mocy do 15 kW</li>
                            <li>pojazdy z kategorii AM</li>
                            <li>zesp&oacute;ł pojazd&oacute;w &ndash; powyższe pojazdy połączone z przyczepą &ndash; tylko w Polsce</li>
                            <li>Wymagany wiek: 18 lat</li>
                        </ul>
                    </td>
                    <td className="align-middle">2200 zł lub 1100 zł w przypadku posiadania prawa jazdy kategorii A1</td>
                </tr>
                <tr>
                    <td className="text-primary text-center align-middle fs-3">A</td>
                    <td>
                        <ul>
                            <li>każdy motocykl</li>
                            <li>pojazd z kategorii AM</li>
                            <li>zesp&oacute;ł pojazd&oacute;w &ndash; powyższe pojazdy połączone z przyczepą &ndash; tylko w Polsce</li>
                            <li>Wymagany wiek: 24 lata lub 20 lat jeśli&nbsp; masz &nbsp;już od co najmniej 2 lat prawo jazdy kategorii A2</li>
                        </ul>
                    </td>
                    <td className="align-middle">
                        2200 zł lub 1100 zł w przypadku posiadania prawa jazdy kategorii A2
                    </td>
                </tr>
                <tr>
                    <td className="text-primary text-center align-middle fs-3">B</td>
                    <td>
                        <ul>
                            <li>pojazd samochodowy o dopuszczalnej masie całkowitej do 3,5 t (na przykład samoch&oacute;d osobowy), z wyjątkiem autobusu i motocykla</li>
                            <li>zesp&oacute;ł pojazd&oacute;w &ndash; powyższy pojazd połączony z lekką przyczepą (o dopuszczalnej masie całkowitej do 750 kg)</li>
                            <li>pojazd z kategorii AM</li>
                            <li>zesp&oacute;ł pojazd&oacute;w &ndash; złożony z pojazdu samochodowego o dopuszczalnej masie całkowitej do 3,5 t (z wyjątkiem autobusu i motocykla) oraz przyczepy. Jednak łączna dopuszczalna masa całkowita całego zespołu nie może przekroczyć 3500 kg,</li>
                            <li>ciągnik rolniczy &ndash; tylko w Polsce</li>
                            <li>pojazd wolnobieżny (na przykład walec) &ndash; tylko w Polsce</li>
                            <li>jeśli masz prawo jazdy kategorii B od co najmniej 3 lat - motocykl o pojemności skokowej silnika do 125 cm3, mocy do 11 kW i stosunku mocy do masy własnej do 0,1 kW/kg &ndash; tylko w Polsce</li>
                            <li>Wymagany wiek: 18 lat</li>
                        </ul>
                    </td>
                    <td className="align-middle">2400 zł</td>
                </tr>
            </tbody>
        </table>
    );
}
