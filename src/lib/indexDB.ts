import type { RegisterCredentials } from "@/types/auth";
import type { LoginCredentials } from "@/types/auth";
import { openDB } from "idb";

const DB_NAME = "receipes-app";
const DB_VERSION = 1;
const STORE_USERS = "users";
const STORE_RECIPES = "recipes";
export const initDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_USERS)) {
        db.createObjectStore(STORE_USERS, { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains(STORE_RECIPES)) {
        db.createObjectStore(STORE_RECIPES, { keyPath: "id" });
      }
    },
  });
};

export const addUser = async (user: RegisterCredentials & { id: string }) => {
  const db = await initDB();
  const tx = db.transaction(STORE_USERS, "readwrite");
  await tx.store.add(user);
  await tx.done;
}

export const checkUserCredentials = async (credentials: LoginCredentials) => {
  const db = await initDB();
  const tx = db.transaction(STORE_USERS, "readonly");
  const allUsers = await tx.store.getAll();
  return allUsers.find(user => user.email === credentials.email && user.password === credentials.password);
}

export const getUserByEmail = async (email: string) => {
  const db = await initDB();
  const tx = db.transaction(STORE_USERS, "readonly");
  const allUsers = await tx.store.getAll();
  return allUsers.find(user => user.email === email);
}