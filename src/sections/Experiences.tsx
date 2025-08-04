// import { Timeline } from '../components/Timeline'
import { Timeline } from '../components/Timeline'
import { experiences } from '../constants'

export const Experiences = () => {
    return (
        <div id="experiencia" className="w-full">
            <Timeline data={experiences} />
        </div>
    )
}
