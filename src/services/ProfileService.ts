import { delay } from "../utils";
import profiles from '../assets/demo-data/profiles.json';

export async function getProfiles({query}: {query?: string}) {
    const randomMillis = Math.floor(Math.random() * 2000);
    await delay(1000 + randomMillis);

    const cleanQuery = query?.trim();
    if (!cleanQuery) return profiles;

    return profiles.filter(
        p => [p.firstName, p.lastName, p.jobTitle]
            .join(' ')
            .includes(cleanQuery)
    );
}