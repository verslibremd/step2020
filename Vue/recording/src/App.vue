<template lang="pug">

  div.container.mt-5
    div.row
      div.col-sm-5.mx-auto
        form(@submit.prevent="registerUser", novalidate, v-bind:style="activeForm", method="post")
          div.step(v-show="step === 1")
            div.form-group
              label(for="name") Имя
              input(@blur="$v.formReg.name.$touch()",
                  :class="{'is-invalid': $v.formReg.name.$error}"
                  v-model="formReg.name",
                  type="text", class="form-control", id="name")
              div(v-if="!$v.formReg.name.required" class='invalid-feedback' ) Поле обязательно для заполнения
              div(v-if="!$v.formReg.name.alpha" class='invalid-feedback' ) Поле не может содержать цифры и другие символы
            div.form-group
              label(for="surname") Фамилия
              input(@blur="$v.formReg.surname.$touch()",
                  :class="{'is-invalid': $v.formReg.surname.$error}"
                  v-model="formReg.surname",
                  type="text", class="form-control", id="surname")
              div(v-if="!$v.formReg.surname.required" class='invalid-feedback' ) Поле обязательно для заполнения
              div(v-if="!$v.formReg.surname.alpha" class='invalid-feedback' ) Поле не может содержать цифры и другие символы
            div.form-group
              label(for="mail") Email
              input(@blur="$v.formReg.mail.$touch()",
                  :class="{'is-invalid': $v.formReg.mail.$error}"
                  v-model="formReg.mail",
                  type="text", class="form-control", id="mail")
              div(v-if="!$v.formReg.mail.required" class='invalid-feedback' ) Поле обязательно для заполнения
              div(v-if="!$v.formReg.mail.email" class='invalid-feedback' ) Поле должно быть email адресом
            div.form-group
              label(for="phone") Телефон
              input(@blur="$v.formReg.phone.$touch()",
                  :class="{'is-invalid': $v.formReg.phone.$error}"
                  v-model="formReg.phone",
                  type="text", class="form-control", id="phone", autocomplete="tel", placeholder="8953..." maxlength="11")
              div(v-if="!$v.formReg.phone.required" class='invalid-feedback' ) Поле обязательно для заполнения
              div(v-if="!$v.formReg.phone.numeric" class='invalid-feedback' ) Поле не может содержать буквы и другие символы
            button(@click="nextStep",
                :disabled="disabledBtn1",
                type="button", class="btn btn-primary mt-3") Следующий шаг
          transition(name="slide-fade")
            div.step(v-show="step === 2")
                  div.form-group
                      label(for="size") Размер
                      input(@blur="$v.formReg.size.$touch()",
                          :class="{'is-invalid': $v.formReg.size.$error}",
                          v-model="formReg.size", type="text", class="form-control", id="size", placeholder="5x5")
                      div(v-if="!$v.formReg.size.required" class='invalid-feedback' ) Поле обязательно для заполнения
                  div.form-group
                      label(for="place") Место нанесения
                      input(@blur="$v.formReg.place.$touch()",
                          :class="{'is-invalid': $v.formReg.place.$error}",
                          v-model="formReg.place",
                          type="text", class="form-control", id="place")
                      div(v-if="!$v.formReg.place.required" class='invalid-feedback' ) Поле обязательно для заполнения
                      div(v-if="!$v.formReg.place.maxLength" class='invalid-feedback' ) Поле не может содержать более 50 символов
                      div(v-if="!$v.formReg.place.x" class='invalid-feedback' ) Поле не может содержать цифры и другие символы
                  div.form-group
                      label(for="file") Пример
                      input(v-on:change="handleFileUpload()"
                          type="file", class="form-control", id="file", ref="file" )
                  button(type="button", @click="backStep" class="btn btn-light mt-3") Назад
                  button(@click="nextStep"
                      :disabled="disabledBtn2",
                      type="button", class="btn btn-primary mt-3") Следующий шаг


          transition(name="slide-fade")
            div.step(v-show="step === 3")
              div.form-group
                  label(for="day") День
                  input(@blur="$v.formReg.day.$touch()"
                      :class="{'is-invalid': $v.formReg.day.$error}",
                      v-model="formReg.day",
                      type="text", class="form-control", id="day")
                  div(v-if="!$v.formReg.day.required" class='invalid-feedback' ) Поле обязательно для заполнения
                  div(v-if="!$v.formReg.day.between" class='invalid-feedback' ) Давайте действовать рамках месяца планеты Земля
              div.form-group
                  label(for="month") Месяц
                  select(@blur="$v.formReg.month.$touch()"
                      :class="{'is-invalid': $v.formReg.month.$error}",
                      v-model="formReg.month", class="form-control", id="month")
                    option(disabled value="") Выберите один из вариантов
                    option Январь
                    option Февраль
                    option Март
                    option Апрель
                    option Май
                    option Июнь
                    option Июль
                    option Август
                    option Сентябрь
                    option Октябрь
                    option Ноябрь
                    option Декабрь
                  div(v-if="!$v.formReg.month.required" class='invalid-feedback' ) Поле обязательно для заполнения
              div.form-group
                  label(for="times") Время
                  select(v-model="formReg.times", class="form-control", id="times")
                      option(disabled value="") Выберите один из вариантов
                      option 10:00
                      option 11:00
                      option 12:00
                      option 13:00
                      option 14:00
                      option 15:00
                      option 16:00
                      option 17:00
                      option 18:00
                      option 19:00
                  div(v-if="!$v.formReg.times.required" class='invalid-feedback' ) Поле обязательно для заполнения
              button(type="button", @click="backStep" class="btn btn-light mt-3") Назад
              button(type="submit", @click="record"
                  v-on:click="submitFile()"
                  class="btn btn-primary mt-3") Записаться
        div.endRecord.mt-5(v-bind:style="box", id="box")
            div.endRecord__box
                span Запись прошла успешно !

  //<div class="container mt-5">
      <div class="row">
        <div class="col-sm-5 mx-auto">
          <form>

            <div v-show="step === 1" class="step">
              <div class="form-group">
                <label for="name">Имя</label>
                <input type="text" class="form-control" id="name">
              </div>

              <div class="form-group">
                <label for="surname">Фамилия</label>
                <input type="text" class="form-control" id="surname">
              </div>

              <div class="form-group">
                <label for="phone">Номер телефона</label>
                <input type="text" class="form-control" id="phone">
              </div>

              <div class="form-group">
                <label for="mail">Электронная почта</label>
                <input type="text" class="form-control" id="mail">
              </div>

              <button @click="nextStep" type="button" class="btn btn-primary mt-3">Следующий шаг</button>
            </div>

          </form>
        </div>
      </div></div>
</template>

<script>

import { required, email, helpers, numeric, maxLength, between } from 'vuelidate/lib/validators'
const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/)
const x = (/^[a-zA-Zа-яёА-ЯЁ\s]*$/)
const axios = require('axios');

export default {
  data(){
    return{
      step: 1,
      formReg: {
          name: '',
          surname: '',
          mail: '',
          phone: '',
          place: '',
          size: '',
          file:'',
          day: '',
          month: '',
          times: '',
      },
      box: {
          display: "none",
      },
        activeForm : {
          display: "block"
        }
    }
  },
  computed:{
    disabledBtn1(){
        return this.$v.formReg.name.$invalid ||
            this.$v.formReg.surname.$invalid ||
            this.$v.formReg.mail.$invalid ||
            this.$v.formReg.phone.$invalid
    },
    disabledBtn2(){
        return this.$v.formReg.size.$invalid ||
               this.$v.formReg.place.$invalid
    },
  },
  methods: {
    nextStep(){
        if (!this.step < 3){
            this.step++
        }
    },
    backStep(){
        if (this.step > 1){
            this.step--
        }
    },
    registerUser(){
        console.log('запись прошла успешно!')
        console.log(this.formReg)
    },
    record(){
            this.activeForm.display = "none"
            this.box.display="block"
    },
     submitFile(){
        let formData = new FormData();
        formData.append('file',this.file)
         axios.post( '',
         formData,
         {
             headers: {
                 'Content-Type': 'multipart/form-data'
             }
         }
         ).then(function(){
             console.log('да!!');
         })
             .catch(function(){
                 console.log('нет!!');
             });
     },
      handleFileUpload(){
          this.file = this.$refs.file.files[0];
      }

  },
  validations: {
    formReg: {
        name: {
            required,
            alpha
        },
        surname: {
            required,
            alpha
        },
        mail:{
            required,
            email
        },
        phone: {
            required,
            numeric
        },
        size: {
            required
        },
        place: {
            required,
            maxLength: maxLength(50),
            x
        },
        day: {
            required,
            between: between(1,31)
        },
        month: {
            required
        },
        times: {
            required
        }

    }
  }

}
</script>

<style>
    .form-group label{
        margin: 10px 0 10px 0;
    }
.endRecord__box{
    width: 500px;
    height: 150px;
    background-color: rgba(219, 206, 192, 0.47);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.endRecord__box span{
    font-size: 20px;
}

.slide-fade-enter-active {
    transition: all .3s ease;
}
.slide-fade-enter{
    transform: translateX(10px);
    opacity: 0;
}
</style>
