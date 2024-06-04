/* eslint-disable react/prop-types */
export const fruits = [
    {
        id: 1,
        nama: "Pisang",
        warna: "Kuning",
        harga: "15.000",
        gambar: "https://i0.wp.com/www.desaintasik.com/wp-content/uploads/2019/01/Manfaat-Buah-Pisang-Bagi-Kesehatan.png?resize=720%2C600&ssl=1"
    },
    {
        id: 2,
        nama: "Jeruk",
        warna: "Orange",
        harga: "5.000",
        gambar: "https://i0.wp.com/www.desaintasik.com/wp-content/uploads/2019/01/10662446.jpg?w=910&ssl=1"
    },
    {
        id: 3,
        nama: "Strawberry",
        warna: "Merah",
        harga: "10.000",
        gambar: "https://i0.wp.com/www.desaintasik.com/wp-content/uploads/2019/01/271285-strawberries.jpg?w=700&ssl=1"
    },
    {
        id: 4,
        nama: "Apel",
        warna: "Hijau",
        harga: "20.000",
        gambar: "https://i0.wp.com/www.desaintasik.com/wp-content/uploads/2020/01/apel-hijau.png?resize=300%2C285&ssl=1"
    },
    {
        id: 5,
        nama: "Buah Naga",
        warna: "Merah",
        harga: "15.000",
        gambar: "https://png.pngtree.com/png-clipart/20220130/original/pngtree-delicious-dragon-fruit-transparent-element-png-image_7241481.png"
    },
]
const Buah = ({fruit}) => {
    return ( 
        <>
            <figure className="border-4 flex flex-col items-center justify-center gap-3 rounded-lg p-5">
                <img src={fruit.gambar} className="w-32" />
                <figcaption className="text-center">
                    <h1>{fruit.nama}</h1>
                    <h1>{fruit.warna}</h1>
                    <h1>{fruit.harga}</h1>
                </figcaption>
            </figure>            
        </>
     );
}
 
export default Buah;