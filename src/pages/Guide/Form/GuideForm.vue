<template>
	<AsideLnb />
  <div class="page-guide-content">
    <h2 class="page-guide-title">Form</h2>

    <div class="page-guide-box">
      <h2 class="page-guide-title2">Input Field</h2>
      <div class="form-item">
        <InputField type="text" placeholder="이름" id="text1" /> 
      </div>
      <div class="form-item">
        <InputField type="text" value="sally" id="text2" /> 
      </div>
      <div class="form-item">
        <InputField type="text" value="sallykwak" id="text3"/> 
      </div>
      <div class="form-item">
        <InputField type="text" disabled="" placeholder="disabled" id="text4" /> 
      </div>
      <div class="form-item">
        <InputField type="text" readonly="" value="readonly" placeholder="readonly" id="text5" /> 
      </div>
      <div class="form-item">
        <InputField type="text" class="error" value="errorCase" errorMsg="error msg" id="text6" /> 
      </div>
      <div class="form-item">
        <InputField type="password" value="pw123455r6" placeholder="비밀번호" id="text8" />
      </div>
    </div>

    <div class="page-guide-box">
      <h2 class="page-guide-title2">TextArea</h2>
      <div class="form-item">
        <Textarea 
          id="textarea1"
          placeholder="문구를 작성해주세요."
          rows="5"
          maxlength="100"
        ></Textarea>
      </div>
      <div class="form-item">
        <Textarea 
          id="textarea2"
          value="오ㅇ오예! 오예~~!"
          placeholder="문구를 작성해주세요."
          rows="3"
          maxlength="50"
        ></Textarea>
      </div>
      <div class="form-item">
        <Textarea 
          id="textarea3"
          placeholder="문구를 작성해주세요."
          rows="4"
          maxlength="150"
          class="error"
          errorMsg="error msg"
        ></Textarea>
      </div>
      <div class="form-item">
        <Textarea 
          id="textarea4"
          placeholder="문구를 작성해주세요."
          rows="4"
          maxlength="150"
          disabled
          value="disabledCase"
        ></Textarea>
      </div>
    </div>

    <div class="page-guide-box">
      <h2 class="page-guide-title2">Check Box</h2>
      <div class="form-item">
        <CheckBox value="chk1" checked id="chk1" />
        <CheckBox value="chk2" id="chk2" />
        <CheckBox value="chk3" id="chk3" disabled />
      </div>
      <div class="form-item col">
        <div v-for="(item, index) in chkList" :key="item">
          <CheckBox
            :value="item.value"
            :id="item.value"
            :checked="item.checked"
            :index="index" />
        </div>
      </div>
    </div>

    <div class="page-guide-box">
      <h2 class="page-guide-title2">Radio Button</h2>
      <div class="form-item">
        <RadioButton name="radio" value="radio1" id="radio1" />
        <RadioButton name="radio" value="radio2" checked id="radio2" />
        <RadioButton name="radio" value="radio3" id="radio3" disabled />
      </div>
      <div class="form-item col">
        <div v-for="(item, index) in radioList" :key="item">
          <RadioButton
            :value="item.value"
            :id="item.value"
            name="radio4"
            :checked="item.checked"
            :index="index" />
        </div>
      </div>
    </div>

    <div class="page-guide-box">
      <h2 class="page-guide-title2">Select Box</h2>
      <div class="form-item">
        <SelectBox :options="selectList" type="native" name="selectbox" />
      </div>
      <div class="form-item">
        <SelectBox :options="selectList" />
      </div>
      <div class="form-item">
        <SelectBox :options="selectList" />
      </div>
      <div class="form-item">
        <SelectBox :options="selectList" :disabled="true" />
      </div>
    </div>

    <div class="page-guide-box">
      <h2 class="page-guide-title2">Toggle Switch</h2>
      <div class="form-item">
        <ToggleSwitch name="toggleSwitch" />
      </div>
      <div class="form-item">
        <ToggleSwitch name="toggleSwitch2" checked />
      </div>
    </div>

    <div class="page-guide-box">
      <h2 class="page-guide-title2">Quantity</h2>
      <div class="form-item col">
        <Quantity value="1" name="quantity" />
        <Quantity value="15" name="quantity2" :maxlength="29" />
      </div>
      <div class="form-item">
        <Quantity value="3" name="quantity3" error errorMsg="수량을 다시 선택해주세요." />
      </div>
      <div class="form-item">
        <Quantity value="2" name="quantity4" :maxlength="9" />
      </div>
    </div>
  </div>
</template>

<script>
  import AsideLnb from '../Layout/AsideLnb.vue'; 
  import InputField from '@/components/Form/InputField.vue';
  import Textarea from '@/components/Form/Textarea.vue';
  import CheckBox from '@/components/Form/CheckBox.vue';
  import RadioButton from '@/components/Form/RadioButton.vue';
  import SelectBox from '@/components/Form/SelectBox.vue';
  import ToggleSwitch from '@/components/Form/ToggleSwitch.vue';
  import Quantity from '@/components/Form/Quantity.vue';

  export default {
    name: 'GuideForm',
    components : { 
      AsideLnb,
      InputField,
      Textarea,
      CheckBox,
      RadioButton,
      SelectBox,
      ToggleSwitch,
      Quantity
    },
    data() {
      return {
        chkList: [
          {
            value: 'sally',
            checked: false
          },
          {
            value: 'sallykwak',
            checked: false
          },
          {
            value: 'sohyung',
            checked: true
          },
        ],
        radioList: [
          {
            value: 'sally2',
            checked: false
          },
          {
            value: 'sallykwak2',
            checked: true
          },
          {
            value: 'sohyung2',
            checked: false
          },
        ],
        selectList: [
          { label: 'sally', value: 'sally' },
          { label: 'sallykwak', value: 'sallykwak' },
          { label: 'sohyung', value: 'sohyung', disabled: true },
        ]
      }
    }
  }
</script>