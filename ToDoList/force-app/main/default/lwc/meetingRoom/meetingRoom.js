import { LightningElement } from 'lwc';

export default class MeetingRoom extends LightningElement {
    meetingRoomList = [
        {roomName: "A01", roomCapacity: "4"},
        {roomName: "A02", roomCapacity: "14"},
        {roomName: "A03", roomCapacity: "5"},
        {roomName: "B01", roomCapacity: "19"},
        {roomName: "B02", roomCapacity: "12"},
        {roomName: "B03", roomCapacity: "22"},
        {roomName: "c01", roomCapacity: "4"}
    ];
}