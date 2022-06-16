import {makeAutoObservable} from 'mobx'
import axios from 'axios'

export default class Store {
    serverUrl = 'http://localhost:5000'
    typesTovar =[
        {
            icon:'icon-fridge',
            type:'fridge',
            sort1:'freeze',
            sort2:'fell',
            typeRu:'холодильники',
            sort1Ru:'морозильники',
            sort2Ru:'смешанные'
        },
        {
            icon:'icon-vacuum',
            type:'vacuum',
            sort1:'robot',
            sort2:'arm',
            typeRu:'пылесосы',
            sort1Ru:'роботы',
            sort2Ru:'ручные'
        },
        {
            icon:'icon-microwave',
            type:'microwave',
            sort1:'convection',
            sort2:'grille',
            typeRu:'микроволновка',
            sort1Ru:'с конвекцией',
            sort2Ru:'с грилем'
        },
        {
            icon:'fas fa-utensils',
            type:'dishwasher',
            sort1:'compact',
            sort2:'full',
            typeRu:'посудомоечные машины',
            sort1Ru:'компактные',
            sort2Ru:'полноразмерные'
        },
        {
            icon:'icon-coffee',
            type:'teapot',
            sort1:'home',
            sort2:'turrist',
            typeRu:'чайники',
            sort1Ru:'домашние',
            sort2Ru:'походные' 
        },
        {
            icon:'icon-conditioner',
            type:'conditioneer',
            sort1:'investor',
            sort2:'hard',
            typeRu:'кондиционер',
            sort1Ru:'инвесторные',
            sort2Ru:'с обогревом' 
        }  
    ]
    tovarArray = []
    versus = []
    basketArray = []
    constructor() {
        makeAutoObservable(this)
    }
    setTovarArray(array) {
        this.tovarArray = array
    }
    setVersus(array) {
        this.versus = array
    }
    setBasketArray(array) {
        this.basketArray = array
    }
    async getTovarArray() {
        try {
            const res = await axios.get(this.serverUrl + '/api/getarr')
            this.setTovarArray(res.data)        
        } catch(e) {

        }
    }
}