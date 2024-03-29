import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
const routes = [
	{
		path: "/",
		name: "contactbook",
		component: ContactBook,
	},
	{
		path: "/contacts/:id",
		name: "contact.edit",
		component: () => import("@/views/ContactEdit.vue"),
		props: true, // Truyền các biến trong $route.params vào làm props
	},
	{
		path: "/add-contact",
		name: "contact.add",
		component: () => import("@/views/AddContact.vue"),
		props: true,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "notfound",
		component: () => import("@/views/NotFound.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});
export default router;
