<template>
    <div>
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    </div>
</template>

<script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {
        name: 'appss',
        data() {
            return {
                editor: ClassicEditor,
                editorData: '<p>Cawdawd<br><br>ontent of the editor.</p><p>Cawdawd<br><br>ontent of the editor.</p><p>Cawdawd<br><br>ontent of the editor.</p><p>Cawdawd<br><br>ontent of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                }
            };
        }
    }
</script>