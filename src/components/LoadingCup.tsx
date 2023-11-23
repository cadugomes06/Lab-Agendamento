import { useEffect, useState } from 'react';

const LoadingCup = () => {
    const [typeNavigator, setTypeNavigator] = useState('')

        //Identificar o navegador
        useEffect(() => {
            if (navigator.userAgent.indexOf('Chrome') > -1 && navigator.userAgent.indexOf('Safari') > -1) {
              setTypeNavigator('chrome')
            } else if (navigator.userAgent.indexOf('Safari') > -1) {
              setTypeNavigator('safari')
            }
        }, [])
        console.log(typeNavigator)

    return (
        <section className={`flex ${typeNavigator == 'safari' ? 'absolute' : 'fixed'} sm:h-[100vh] w-full h-full max-h-max top-0 z-50 bg-black/80 justify-center items-center `}>

            <div className="cup"></div>

        </section>
    )
}


export default LoadingCup;