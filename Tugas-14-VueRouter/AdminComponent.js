export const AdminComponent = {
    template: `
    <div>
      <h1>Form Pembuatan User</h1>
      <form>
        <label>Name : </label><br>
        <input type="text" name="name" ref="name" v-model="name"><br>
        <label>Email : </label><br>
        <input type="text" name="email" ref="email" v-model="email"><br>
        <label>Password : </label><br>
        <input type="password" name="password" ref="password" v-model="password"><br>
      
        <input type="submit" value="SUBMIT">
      </form>
    </div>
    `
}