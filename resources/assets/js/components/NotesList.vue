<template>
    <div>
        <h4 class="d-flex justify-content-between">
            <div><slot name="title">Notes</slot></div>
            <!-- <button class="btn btn-sm btn-primary" @click="showAddForm = true">Add Note</button> -->
        </h4>
        <div v-if="notes.length == 0" class="alert alert-light border">
            Not administrative notes for this record.
        </div>
        <table class="table table-striped"  v-if="notes.length > 0">
            <thead>
                <tr>
                    <th>Note</th>
                    <th>Author</th>
                    <th>Created</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="note in notes" :key="note.id">
                    <td>{{note.topic ? note.topic.toUpperCase()+': ' : ''}} {{note.content}}</td>
                    <td>{{note.author.name}}</td>
                    <td>{{note.created_at | formatDate}}</td>
                </tr>
            </tbody>
        </table>
        <!-- <b-modal v-model="showAddForm" title="Add a note">
            <textarea style="width: 100%; height: 10rem;" class="form-control" v-model="newNoteContent"></textarea>
        </b-modal> -->
    </div>
</template>
<script>
import InputRow from './forms/InputRow.vue'
export default {
    name: 'NotesList',
    components: {
        InputRow
    },
    props: {
        notes: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            showAddForm: false,
            newNoteContent: null
        }
    }
}
</script>