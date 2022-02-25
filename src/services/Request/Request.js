import axios from 'axios';

function RequestService() {
    this.sendRequest = (obj) => {
        return new Promise((resolve, reject) => {
            reject = reject || (() => {});

            axios({
                method: obj.method,
                url: obj.url,
                data: obj.data,
                dataType: obj.dataType || 'json',
                processData: obj.processData || true,
                contentType: obj.contentType || 'application/x-www-form-urlencoded; charset=UTF-8',
            })
                .then((data) => {
                    if (!!data.status) {
                        resolve(data);
                    } else {
                        reject(data.error);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };
}

export default RequestService;
