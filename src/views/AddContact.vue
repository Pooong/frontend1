<template>
	<div class="page">
		<h4>Thêm Liên hệ</h4>
		<ContactForm :contact="newContact" @submit:contact="addContact" />
		<p>{{ message }}</p>
	</div>
</template>

<script>
	import ContactForm from "@/components/ContactForm.vue";
	import ContactService from "@/services/contact.service";

	export default {
		components: {
			ContactForm,
		},
		data() {
			return {
				newContact: {
					name: "",
					email: "",
					address: "",
					phone: "",
					favorite: false,
				},
				message: "",
			};
		},
		methods: {
			async addContact(contactData) {
				try {
					await ContactService.create(contactData);
					alert("Liên hệ đã được thêm thành công.");
					this.$router.push({ name: "contactbook" });
				} catch (error) {
					console.error("Error adding contact:", error);
					this.message = "Đã xảy ra lỗi khi thêm liên hệ.";
				}
			},
		},
	};
</script>
