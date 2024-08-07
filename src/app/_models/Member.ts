import { Photo } from "./Photo";

export interface Member {
    id: number;
    userName:     string;
    gender:       string;
    pictureUrl: string;
    age: number;
    knownAs:      string;
    created:      Date;
    lastActive:   Date;
    introduction: string;
    lookingFor:   string;
    interests:    string;
    city:         string;
    country:      string;
    photos:       Photo[];
}
