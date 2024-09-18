import {useEffect, useState} from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {

        const todayDate = new Date().toISOString().split('T')[0];
        const currencyApi= `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${todayDate}/v1/currencies/${currency}.json`

        fetch(currencyApi)
            .then((res) => res.json())
            .then(res => setData(res[currency]))
    }, [currency]);
    return data;
}

export default useCurrencyInfo;