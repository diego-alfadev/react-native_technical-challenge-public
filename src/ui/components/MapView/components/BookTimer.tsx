import { Time } from 'core/shared/Time'
import React from 'react'
import { Text, View } from 'react-native'


function BookTimer() {

    const [timeMilis, setTime] = React.useState<number>(0)
    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => prev + 1000)
        }, 1000)
        return () => clearInterval(interval)
    }, [])


    return (
        <View>
            <Text>{timeMilis / 1000}s</Text>
        </View>
    )
}

export default BookTimer
