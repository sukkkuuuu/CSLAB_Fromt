const API_URL = "http://cslab.devcs.co.kr";

export const find_password = (email) => {
    return new Promise((resolve, reject) => {
        fetch(API_URL + "/api/member/find-password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
            }),
        })
            .then((res) => res.json())
            .then((res) => resolve(res))
            .catch((error) => reject(error));
    });
};
