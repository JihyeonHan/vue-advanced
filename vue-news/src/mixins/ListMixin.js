//MIXIN
export default {
    // 재사용할 컴포넌트 옴션
    created() {
        bus.$emit("start:spinner");
        // setTimeout(() => {
        this.$store
            .dispatch("FETCH_LIST", this.$route.name)
            .then(() => {
                console.log("fetched");
                bus.$emit("end:spinner");
            })
            .catch((error) => {
                console.log(error);
            });
        // }, 1000);

    }
}
//HOC
/* export default function create(){

} */