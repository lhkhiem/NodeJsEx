# Chuc nang cua cac package module
-express: la xuong song of app, tao ra cac phuong thuc khoi tao,ket noi server...
-morgan: dung de hien thi console log tren moi truong dev chi tiet hon
-nodemon: dung de tu dong chay lai node moi lam save
-body-parser: dung de cho server thay duoc noi dung body tu client gui ve server, neu khong dung se bi undefined
-express-promise-router: lang nghe loi next sang ham xu ly loi(khong can try/catch)
-@hapi/joi: dung der validate du lieu dau vao

# Cach viet code dung
-ket thu cau lenh khong can dau ';'
-return: 
    +neu cung 1 dong thi khong can dau ()
        vd: return res.status(200).json({
                message: 'Server is Ok good!'
            }) 
    + neu tach code xuong dong thi can dau ()
        vd: return 
            (
                res.status(200).json({
                    message: 'Server is Ok good!'
                    })
            )

