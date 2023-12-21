document.addEventListener('alpine:init', () => {
    Alpine.data('foodContent', () => ({

        items: [
            { id: 'Burger', name: 'Burger ', img: 'buger.jpg', price: 10000, deskripsi: 'wenakkk'},
            { id: 'kue', name: 'Kue ', img: 'cake.jpg', price: 15000, deskripsi: 'jossss'},
            { id: 'sosis', name: 'Sosis ', img: 'sosis.jpg', price: 10000, deskripsi: 'mahokkk'},
            { id: 'Burger', name: 'Burger ', img: 'buger.jpg', price: 10000, deskripsi: 'wenakkk'},
            { id: 'kue', name: 'Kue ', img: 'cake.jpg', price: 15000, deskripsi: 'jossss'},
            { id: 'sosis', name: 'Sosis ', img: 'sosis.jpg', price: 10000, deskripsi: 'mahokkk'},
            { id: 'Burger', name: 'Burger ', img: 'buger.jpg', price: 10000, deskripsi: 'wenakkk'},
            { id: 'kue', name: 'Kue ', img: 'cake.jpg', price: 15000, deskripsi: 'jossss'},
            { id: 'sosis', name: 'Sosis ', img: 'sosis.jpg', price: 10000, deskripsi: 'mahokkk'},
            { id: 'Burger', name: 'Burger ', img: 'buger.jpg', price: 10000, deskripsi: 'wenakkk'},
            // { id: 'iga bakar', name: 'Iga Bakar', img: 'iga.jpg', price: 50000, deskripsi: 'wenak maknyos'},
        ],
    }));

    Alpine.data('drinkContent', () => ({
        items: [
            { id: 'Kopi Kapal Api', name: 'Kopi Kapal Api ', img: 'kapalapi.webp', price: 5000, deskripsi: 'murah banget poll mas broooooo wenak pisan'},
            { id: 'Kopi Hitam', name: 'Kopi Hitam ', img: 'menu2.jpg', price: 5000, deskripsi: 'sueger poll mas bro'},
            { id: 'Kopi Kapal Api', name: 'Kopi Kapal Api ', img: 'kapalapi.webp', price: 5000, deskripsi: 'murah seger paket lengkap'},
            { id: 'Kopi Hitam', name: 'Kopi Hitam ', img: 'menu2.jpg', price: 5000, deskripsi: 'sueger poll mas bro'},
            { id: 'Kopi Kapal Api', name: 'Kopi Kapal Api ', img: 'kapalapi.webp', price: 5000, deskripsi: 'murah seger paket lengkap'},
            { id: 'Kopi Hitam', name: 'Kopi Hitam ', img: 'menu2.jpg', price: 5000, deskripsi: 'sueger poll mas bro'},
            { id: 'Kopi Kapal Api', name: 'Kopi Kapal Api ', img: 'kapalapi.webp', price: 5000, deskripsi: 'murah banget poll mas broooooo wenak pisan'},
            { id: 'Kopi Hitam', name: 'Kopi Hitam ', img: 'menu2.jpg', price: 5000, deskripsi: 'sueger poll mas bro'},
            { id: 'Kopi Kapal Api', name: 'Kopi Kapal Api ', img: 'kapalapi.webp', price: 5000, deskripsi: 'murah seger paket lengkap'},
            { id: 'Kopi Hitam', name: 'Kopi Hitam ', img: 'menu2.jpg', price: 5000, deskripsi: 'sueger poll mas bro'},
            { id: 'Kopi Kapal Api', name: 'Kopi Kapal Api ', img: 'kapalapi.webp', price: 5000, deskripsi: 'murah seger paket lengkap'},
            { id: 'Kopi Hitam', name: 'Kopi Hitam ', img: 'menu2.jpg', price: 5000, deskripsi: 'sueger poll mas bro'},
            { id: 'Kopi Kapal Api', name: 'Kopi Kapal Api ', img: 'kapalapi.webp', price: 5000, deskripsi: 'murah banget poll mas broooooo wenak pisan'},
            { id: 'Kopi Hitam', name: 'Kopi Hitam ', img: 'menu2.jpg', price: 5000, deskripsi: 'sueger poll mas bro'},
            { id: 'Kopi Kapal Api', name: 'Kopi Kapal Api ', img: 'kapalapi.webp', price: 5000, deskripsi: 'murah seger paket lengkap'},
            { id: 'Kopi Hitam', name: 'Kopi Hitam ', img: 'menu2.jpg', price: 5000, deskripsi: 'sueger poll mas bro'},
            { id: 'Kopi Kapal Api', name: 'Kopi Kapal Api ', img: 'kapalapi.webp', price: 5000, deskripsi: 'murah seger paket lengkap'},
            { id: 'Kopi Hitam', name: 'Kopi Hitam ', img: 'menu2.jpg', price: 5000, deskripsi: 'sueger poll mas bro'},
            { id: 'Kopi Macchiato', name: 'Kopi Macchiato ', img: 'menu1.jpg', price: 5000, deskripsi: 'sueger'},
            { id: 'Kopi Macchiato', name: 'Kopi Macchiato ', img: 'menu1.jpg', price: 5000, deskripsi: 'sueger'},
            { id: 'Kopi Macchiato', name: 'Kopi Macchiato ', img: 'menu1.jpg', price: 5000, deskripsi: 'sueger'},
            { id: 'Kopi Macchiato', name: 'Kopi Macchiato ', img: 'menu1.jpg', price: 5000, deskripsi: 'sueger'},
            // { id: 'es Coklat', name: 'Es Coklat', img: 'es.webp', price: 5000, deskripsi: 'seger e es coklat'},
        ],
    }));


    Alpine.store('cart', {

        // Awal permulaan sebelum ada pesanan di keranjang

        items: [],
        total: 0,
        totalJumlah: 0,

        // Digunakan untuk tombol plus ( + )

        add(newItem) {
            const cartItem = this.items.find((item) => item.id === newItem.id);

            if(!cartItem) {
                this.items.push({...newItem, totalJumlah: 1, total: newItem.price});
                this.total += newItem.price;
                this.totalJumlah++;
            } else {
                this.items = this.items.map((item) => {
                    if(item.id !== newItem.id){
                        return item;
                    } else {
                        item.totalJumlah ++;
                        item.total = item.price * item.totalJumlah;
                        this.totalJumlah++;
                        this.total += item.price;
                        return item;
                    }
                });
            }
        },

        // digunakan untuk tombol kurang ( - )

        remove(id) {
            const cardItem = this.items.find((item) => item.id === id );

            if(cardItem.totalJumlah > 1) {
                this.items = this.items.map((item) => {
                    if(item.id !== id) {
                        return item;
                    } else {
                        item.totalJumlah--;
                        item.total = item.price * item.totalJumlah;
                        this.totalJumlah--;
                        this.total -= item.price;
                        return item;
                    }
                });
            } else if (cardItem.totalJumlah === 1) {
                this.items = this.items.filter((item) => item.id !== id);
                this.totalJumlah--;
                this.total -= cardItem.price;
            }
        },

        // digunakan untuk pada saat menekan tombol kirim / mengirim pesanan

        clearCart() {
            this.items = [];
            this.total = 0;
            this.totalJumlah = 0;
        },
    });
});

// Konversi uang ke rupiah

const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};

