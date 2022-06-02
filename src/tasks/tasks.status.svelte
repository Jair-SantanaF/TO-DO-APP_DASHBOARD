<script>

import { StatusStore } from "../stores"
import TaskStatus from "../$services/tasks.service"

let TasksCompleted = 0
let TasksPending = 0

getStatus()

async function getStatus() {
        
        const resp = await TaskStatus.getStatus()

        if (resp.error) 
            return error = resp.error.message
    
            StatusStore.set(resp.data)


    }

</script>

<style>

.wwww {
  overflow-x: hidden;
  font-family: sans-serif;
  padding: 70px;
}
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
}
.card-container .cardww {
  flex: 1;
  transition: all 0.3s ease-in-out;
  background-color: #504658;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 15px 0px rgba(0, 0, 0, 0.2);
  max-width: 40%;
}
.cardww h2 {
    font-size: 22px;
    font-weight: 700;
    color: #fff;
}
.card-container .cardww:not(:first-child) {
  margin-left: -10rem;
}

.card-container .cardww:hover,
.card-container .cardww:focus {
  transform: translateY(-1rem);
  outline: none;
}
.card-container .cardww:hover ~ .cardww,
.card-container .cardww:focus ~ .cardww {
  transform: translateX(11rem);
}

@media (max-width: 767px) {
  #demo {
    margin-top: 0px;
  }

  .card-container {
    flex-wrap: wrap;
    justify-content: center;
    padding: 0rem 1rem 2rem;
  }
  .card-container .cardww {
    flex: 1 1 100%;
    max-width: 200px;
  }
  .card-container .cardww:not(:first-child) {
    margin-left: 0rem;
    margin-top: 2rem;
  }
  .card-container .cardww:hover,
  .card-container .cardww:focus {
    transform: translateX(0rem);
  }
  .card-container .cardww:hover ~ .cardww,
  .card-container .cardww:focus ~ .cardww {
    transform: translateY(0rem);
  }
}

</style>

<section class="wwww">
    <div class="container">
      <div class="title">Resumen de tareas</div>
      {#if !$StatusStore.length}
        <div class="sub-title">Registra tu primer tarea...</div>
      {/if}
        <div class="row mt-5">
          <div class="col">
            <div class="card-container" id="demo">
              {#each $StatusStore as status}
                <div class="cardww" tabindex="0">
                  <h2>{status._id === true ? "Tareas Completadas" : "Tareas pendientes"} { status.total }</h2>
                </div>
              {/each}
            </div>
          </div>
        </div>
    </div>
  </section>